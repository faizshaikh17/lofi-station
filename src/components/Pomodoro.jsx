import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, pauseTimer, tick, reset } from '../feature/pomodoroSlice'
function Pomodoro() {
  const { workDuration, breakDuration, timeLeft, isRunning, isWorkInterval } = useSelector((state) => state.pomodoro)
  const dispatch = useDispatch();
  const minutes = timeLeft / 60;
  const seconds = minutes % 60


  return (
    <div className='flex bg-[#171717] z-[10] gap-2 border-[#73e7e7] text-[#e5e6e6] border-1 absolute -right-8 flex-col bg-primary w-50 items-center justify-center p-4 m-8 shadow-lg'>
      <div className='flex justify-around items-center gap-2'>
        <ChevronLeft />
        <h1 className='text-4xl'>{`${minutes}:${seconds}`}</h1>
        <ChevronRight />
      </div>
      <div className='flex justify-between gap-4'>
        <button
          type="submit"
          // disabled={loading}
          className="hover:bg-[#e5e6e6] border-1 border-[#e5e6e6] font-bold hover:text-[#171717] text-sm w-17 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 "
          onClick={() => { dispatch(startTimer(), tick()) }}
        >
          {"Start"}
        </button>
        <button
          type="submit"
          // disabled={loading}
          className="bg-[#ff2400] font-bold text-[#171717] text-sm w-17 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 "
        >
          {"Reset"}
        </button>
      </div>
    </div>
  )
}

export default Pomodoro