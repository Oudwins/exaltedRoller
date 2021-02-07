export default function ({ userId, color = 0 }) {
  let user = null;
  this.messages.forEach((el) => {
    if (el.user.id === userId) {
      el.user.color = color;
      if (!user) user = el.user;
    }
  });
  return user;
}
