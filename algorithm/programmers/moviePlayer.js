function solution(video_len, pos, op_start, op_end, commands) {

  const convertToSecond = (time) => {
    let [min, sec] = time.split(":").map(e => +e);
    return min * 60 + sec;
  }

  const convertToString = (seconds) => {
    const min = parseInt(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const [totalLength, current, opStart, opEnd] =
    [video_len, pos, op_start, op_end].map(strTime => convertToSecond(strTime));

  const isSkip = (now) => {
    return now >= opStart && now <= opEnd ? opEnd : now
  }

  let answer = isSkip(current);

  const videoCommander = (command) => {
    if (command === "next") {
      answer = answer + 10;
      if (answer > totalLength) answer = totalLength

    } else {
      answer = answer - 10;
      if (answer <= 0) answer = 0
    }
    answer = isSkip(answer)
  }

  commands.forEach(command => videoCommander(command));

  return convertToString(answer)
}