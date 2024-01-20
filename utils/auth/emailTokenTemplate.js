const emailTokenTemplate = (token) => {
  return `<div style="text-align:center;font-family:josefin sans,sans-serif"><img alt=""src=https://i.ibb.co/0Z8jp6W/Vector-24-1.png><h1 style=font-size:36px;margin-bottom:10px>Welcome To Our Website</h1><p style="text-align:center;font-family:josefin sans,sans-serif; font-size: 18px; margin-bottom: 20px;">Click below link to verify your email</p>
    <a href="http://localhost:3000${process.env.BASE_URL}${process.env.AUTH_URL}/verify?token=${token}">Verify your email</a>`;
};
module.exports = emailTokenTemplate;
