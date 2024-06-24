import { useEffect, useState } from 'react';
import './CountdownTimer.scss';
import { getRemainingTime } from './Utils/CountdownTimerUtils';
import PropTypes from 'prop-types';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
};

CountdownTimer.propTypes = {
  CountdownTimestampMs: PropTypes.number.isRequired,
  change: PropTypes.bool.isRequired
};

export default function CountdownTimer({ CountdownTimestampMs, change }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(CountdownTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [CountdownTimestampMs]);

  const updateTime = (countdown) => {
    setRemainingTime(getRemainingTime(countdown));
  };

  return (
    change ? (
      <div className='container'>
        <h1 className='barev'><em>Հարսանիքին մնաց</em></h1>
        <div className='timerCont'>
          <div className='CountdownTimer1'>
            <div className='time-section'>
              <p>{remainingTime.days}</p>
              <em>Օր</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.hours}</p>
              <em>Ժամ</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.minutes}</p>
              <em>Րոպե</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.seconds}</p>
              <em>Վայրկյան</em>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='container2'>
        <div className='timerCont'>
          <div className='CountdownTimer2'>
            <div className='time-section'>
              <p>{remainingTime.days}</p>
              <em className='text'>Days</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.hours}</p>
              <em className='text'>Hours</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.minutes}</p>
              <em className='text'>Minutes</em>
            </div>
            <div className='time-section'>
              <p>{remainingTime.seconds}</p>
              <em className='text'>Seconds</em>
            </div>
          </div>
        </div>
        <h1 className='barev1'><em>Days left for the wedding</em></h1>
      </div>
    )
  );
}
