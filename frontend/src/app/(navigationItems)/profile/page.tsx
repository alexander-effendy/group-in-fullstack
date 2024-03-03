"use client";

import { axiosInstanceWithAuth } from "@/api/Axios";
import EditProfileModal from "@/components/EditProfileModal";
import ReviewCard from "@/components/ReviewCard";
import { Box, LinearProgress, Rating, Stack } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

interface Review {
  review_id: number;
  reviewer_id: number;
  rating: number;
  comment: string;
  reviewee_id: number;
  reviewer_name: string;
  likes: number;
  dislikes: number;
}

interface Course {
  course_id: string;
  title: string;
  description: string | null;
}

interface Member {
  member_id: number;
  name: string;
  member_bio: string | null;
  reviews: Review[];
  courses: Course[];
}

interface PageProps {
  id: number
}

const page: FC<PageProps> = ({ id }):JSX.Element => {
  const [data, setData] = useState({} as Member);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [loadingBio, setLoadingBio] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstanceWithAuth.get(`/members/profile`);
      const result = response.data as Member;
      const totalRating = result.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const averageRating = totalRating / result.reviews.length;
      setData(result);
      setLoading(false);
      setRating(averageRating);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstanceWithAuth.get(`/members/profile`);
      const result = response.data as Member;
      const totalRating = result.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const averageRating = totalRating / result.reviews.length;
      setData(result);
      setLoading(false);
      setRating(averageRating);
      setLoadingBio(false);
    };

    if (modalVisible === true) {
      setLoadingBio(true);
    }

    if (loadingBio === true && modalVisible === false) {
      fetchData();
    }
  });

  const gradientStyle = {
    backgroundColor: "rgb(86,63,231)",
    background:
      "linear-gradient(90deg, rgba(86,63,231,1) 0%, rgba(149,71,254,1) 100%)",
  };
  const [modalVisible, setModalVisible] = useState(false);
  const handleEditProfile = () => {
    setModalVisible(true);
  };

  return loading ? (
    <LinearProgress />
  ) : (
    <Box className="overflow-hidden">
      <EditProfileModal
        isOpen={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <Box className="h-28 fixed w-full -z-10" sx={gradientStyle}></Box>
      <Box className="p-8 h-screen box-border ">
        <Box className="h-1/6">
          <Stack direction="row" spacing={3}>
            <Box>
              <p
                className="text-4xl mt-4 text-white"
                style={{ fontFamily: "MetropolisSemiBold" }}
              >
                Your Profile
              </p>
              <p
                className="text-xs text-white"
                style={{ fontFamily: "MetropolisRegular" }}
              >
                {data.name}
              </p>
            </Box>
            <Box className="flex items-center" onClick={handleEditProfile}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFFFFF"
                className="w-6 h-6 hover:stroke-slate-400 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Box>
          </Stack>
          <Box className="mt-3">
            <Rating
              value={rating}
              defaultValue={2.5}
              precision={0.1}
              size="large"
              readOnly
            />
          </Box>
        </Box>
        <Box className="flex h-5/6 mt-6 ">
          <Box className="w-1/3">
            <p
              className="text-2xl mb-2"
              style={{ fontFamily: "MetropolisSemiBold" }}
            >
              Student Bio
            </p>
            <Box className="h-5/6 rounded-lg bg-whiteCustom mr-4 p-4 shadow-sm shadow-slate-500">
              {loadingBio ? (
                <LinearProgress />
              ) : (
                <p
                  className="text-xs"
                  style={{ fontFamily: "MetropolisRegular" }}
                >
                  {data.member_bio}
                </p>
              )}
            </Box>
          </Box>
          <Box className="w-2/3">
            <p
              className="text-2xl mb-2"
              style={{ fontFamily: "MetropolisSemiBold" }}
            >
              Reviews
            </p>
            <Box className="h-5/6 mr-2 overflow-x-hidden overflow-y-auto">
              {data.reviews?.map((review) => (
                <ReviewCard key={review.review_id} id={review.review_id} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
