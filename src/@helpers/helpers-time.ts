export const formatSecondsToTimeSong = (seconds = 0) => {
  let secondsFormatted = '';

  if (seconds < 3600) {
    secondsFormatted = formatSecondsToTimeSongLessThanOneHour(seconds);
  } else {
    secondsFormatted = formatSecondsToTimeSongGreaterThanOneHour(seconds);
  }

  return secondsFormatted;
};

export const formatSecondsToTimeSongLessThanOneHour = (secondsToFormat = 0) => {
  const secondsOnlyIntegers = Math.floor(secondsToFormat);

  if (secondsOnlyIntegers < 3600) {
    const minutes = Math.floor(secondsOnlyIntegers / 60);
    const remainingSeconds = secondsOnlyIntegers % 60;

    const minutesStr = String(minutes).padStart(2, '0');
    const remainingSecondsStr = String(remainingSeconds).padStart(2, '0');

    return `${minutesStr}:${remainingSecondsStr}`;
  }

  throw Error('Error, seconds are invalid');
};
export const formatSecondsToTimeSongGreaterThanOneHour = (secondsToFormat = 0) => {
  const secondsOnlyIntegers = Math.floor(secondsToFormat);

  if (secondsOnlyIntegers >= 3600) {
    const hours = Math.floor(secondsOnlyIntegers / 3600); // 3600 seconds = 1 hour
    const remainingMinutes = secondsOnlyIntegers % 3600;
    const minutes = Math.floor(remainingMinutes / 60);
    const remainingSeconds = minutes % 60;

    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const remainingSecondsStr = String(remainingSeconds).padStart(2, '0');

    return `${hoursStr}:${minutesStr}:${remainingSecondsStr}`;
  }
  throw Error('Error, seconds are invalid');
};
