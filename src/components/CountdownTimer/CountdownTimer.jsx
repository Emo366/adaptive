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
    <div className={change ? 'container' : 'container2'}>
      <div>
   {
    change?(
      <div className='CountdownTimer1'>
        <p><span>{remainingTime.days}</span> <em>Օր</em></p>
      <p><span>{remainingTime.hours}</span> <em>Ժամ</em></p>
      <p><span>{remainingTime.minutes}</span> <em>Րոպե</em></p>
      <p><span>{remainingTime.seconds}</span> <em>Վայրկյան</em></p>
      </div>
    
    ):
    (
      <div className='CountdownTimer2'>
   <p><span>{remainingTime.days}</span><em className='text'> Days</em></p>
      <p><span>{remainingTime.hours}</span><em className='text'> Hours</em></p>
      <p><span>{remainingTime.minutes}</span><em className='text'> Minutes</em></p>
      <p><span>{remainingTime.seconds}</span> <em className='text'> Seconds</em></p>
      </div>
   
    )
   }
      </div>
    </div>
  );
}
