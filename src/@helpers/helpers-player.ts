/*
    100 % - durationOnSeconds
    x %   - elapsedTimeInSeconds

    duration * x = 100 * elapsed
    x = (100 * elapsed) / duration
  */
export const getPercentageElapsedTime = (elapsedTimeInSeconds = 0, durationOnSeconds = 0) => {
  if (durationOnSeconds > 0) {
    return Math.floor((100 * elapsedTimeInSeconds) / Math.floor(durationOnSeconds));
  }
  return 0;
};
