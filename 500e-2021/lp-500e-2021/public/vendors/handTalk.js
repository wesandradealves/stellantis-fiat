const handTalk = () => {
  window.ht = new HT({
    token: "5e678207a1f3d846ea77640b9216dd4f",
    avatar: "MAYA",
    mobileConfig: {
      align: 'top',
    }
  });
};
window.addEventListener("load", () => {
  handTalk();
});
