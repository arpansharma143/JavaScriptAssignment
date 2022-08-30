const button = document.getElementById("button");

button.addEventListener("click", () => {
  const input1 = document.getElementById("date1").value;
  const input2 = document.getElementById("date2").value;
  const year = document.getElementById("result");

  const arr1 = input1.split("-");
  const arr2 = input2.split("-");

  let yearGAp = Math.abs(+arr1[0] - +arr2[0]);
  let monthGap = Math.abs(+arr1[1] - +arr2[1]);
  let dateGap = Math.abs(+arr1[2] - +arr2[2]);

  let yeartext = yearGAp ? `${yearGAp} year` : "";
  let monthTExt = monthGap ? ` ${monthGap} months  ` : "";
  let dayText = dateGap ? ` ${dateGap} days` : "";
  year.innerHTML = yeartext + monthTExt + dayText;
});
