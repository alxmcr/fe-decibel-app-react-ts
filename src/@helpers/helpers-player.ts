export const getPercentageElapsedTime = (elapsedTimeInSeconds = 0, durationInSeconds = 0) => {
  /*
      100 % - durationInSeconds
      x %   - elapsedTimeInSeconds
  
      duration * x = 100 * elapsed
      x = (100 * elapsed) / duration
    */

  return Math.floor((100 * elapsedTimeInSeconds) / Math.floor(durationInSeconds));
};
