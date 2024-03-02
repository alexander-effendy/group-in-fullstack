import { Box, Stack } from '@mui/material'
import React from 'react'

const GroupCard = () => {
  return (
    <Box className='p-2'>
      <Stack direction='row' spacing={2} className='justify-center border-black border-solid'>
        <Box className='w-20 h-20 bg-black rounded-full overflow-hidden'>

        </Box>
        <Box>
          <p className='text-xl hover:cursor-pointer hover:underline' style={{ fontFamily: 'MetropolisSemiBold'}}>Group Name</p> 
          <p className='text-xs' style={{ fontFamily: 'MetropolisRegular'}}>Course Code</p>
          <Box className='flex mt-2'>
            <Stack direction='row'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                <g fill='none' fill-rule='evenodd'>
                  <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='#09244B' d='M12 13c2.396 0 4.575.694 6.178 1.672.8.488 1.484 1.064 1.978 1.69.486.615.844 1.351.844 2.138 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.695 9.605 13 12 13Zm0 2c-2.023 0-3.843.59-5.136 1.379-.647.394-1.135.822-1.45 1.222-.324.41-.414.72-.414.899 0 .122.037.251.255.426.249.2.682.407 1.344.582C7.917 19.858 9.811 20 12 20c2.19 0 4.083-.143 5.4-.492.663-.175 1.096-.382 1.345-.582.218-.175.255-.304.255-.426 0-.18-.09-.489-.413-.899-.316-.4-.804-.828-1.451-1.222C15.843 15.589 14.023 15 12 15Zm0-13a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'/>
                </g>
              </svg>
              <Box className='w-6 h-6 flex'>
                <p className='text-xs ml-1' style={{ fontFamily: 'MetropolisRegular'}}>4/5</p>
              </Box> 
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default GroupCard