export const getPercentageElapsedTime = (elapsedTimeInSeconds = 0, durationOnSeconds = 0) => {
  /*
      100 % - durationOnSeconds
      x %   - elapsedTimeInSeconds
  
      duration * x = 100 * elapsed
      x = (100 * elapsed) / duration
    */

  return Math.floor((100 * elapsedTimeInSeconds) / Math.floor(durationOnSeconds));
};
