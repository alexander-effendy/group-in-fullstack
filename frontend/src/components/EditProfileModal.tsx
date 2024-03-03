'use client';

import { Dialog, Transition } from '@headlessui/react'
import { Box, MenuItem, Select, TextField } from '@mui/material';
import { Fragment, } from 'react'

interface EditProfileProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditProfileModal: React.FC<EditProfileProps> = ({ isOpen, closeModal }) => {
  const handlePost = () => {
    console.log('post!');
    closeModal();
  }
  return (
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
                    className="text-2xl font-medium leading-6 text-gray-900"
                    style={{ fontFamily: 'MetropolisSemiBold'}}
                  >
                    Updatae your bio 🔎
                  </Dialog.Title>
                  <Box className='mt-4 w-full'>
                    <TextField
                      placeholder="Group Description"
                      multiline
                      className='w-full'
                    />
                  </Box>
                  <button
                    type="button"
                    className="w-20 mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handlePost}
                  >
                    Done
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default EditProfileModal;