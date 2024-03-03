'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { axiosInstanceWithAuth } from '../api/Axios';

interface MyModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, closeModal }) => {
  const [selectCourse, setSelectCourse] = useState('');
  const [courseAdded, setCourseAdded] = useState(false);
  const [validateCourse, setValidateCourse] = useState(true);

  const handleAddCourse = async () => {
    try {
      if (selectCourse === '') return;
      await axiosInstanceWithAuth.get(`courses/${selectCourse}`).then(() => {})
      await axiosInstanceWithAuth.post(`/enrollment/enroll`, {
        course_id: selectCourse,
      })
      .then(() => {
        console.log('done adding person tot he course');
        console.log(selectCourse);
      })
      .then(() => {
        setSelectCourse('');
        setValidateCourse(true);
        setCourseAdded(true);
      });
    } catch (error) {
      console.error(error);
      setValidateCourse(false);
    }
  };

  return (
    <>
      {courseAdded && 
        <>
          <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className="flex flex-col w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" 
                  style={{ maxHeight: '80vh', overflowY: 'auto' }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                    onClick={closeModal}
                  >
                    Congratulations!
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have been added to the course!
                    </p>
                  </div>
                  
                  <div className="mt-4 gap-3 flex justify-between">
                    <div></div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setCourseAdded(false);
                        closeModal();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
      }



      {!courseAdded && <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className="flex flex-col w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" 
                  style={{ maxHeight: '80vh', overflowY: 'auto' }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Course
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Select a course you are enrolled in
                    </p>

                    <input
                      id="selectcourse"
                      name="selectcourse"
                      type="text"
                      required
                      value={selectCourse}
                      onChange={(e) => {
                        setSelectCourse(e.target.value);
                        setValidateCourse(true);
                      }}
                      className="mt-1 mb-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {courseAdded && <div className="text-green-500">You have been added to {selectCourse}</div>}
                    {!validateCourse && <div className="text-red-500">The course {selectCourse} does not exist.</div>}
                  </div>
                  
                  <div className="mt-4 gap-3 flex justify-between">
                    <div>
                      
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleAddCourse}
                      >
                        Confirm
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      } 
    </>
  )
}

export default MyModal;


