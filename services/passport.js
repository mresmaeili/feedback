const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: '77kop0mbtst8r8',
//       clientSecret: 'hZqR0wQYwTIB6F7v',
//       callbackURL: '/auth/linkedin/callback',
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ linkedinId: profile.id });
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       const user = await new User({ id: profile.id }).save();
//       done(null, user);
//     }
//   )
// );

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: '77kop0mbtst8r8',
//       clientSecret: 'hZqR0wQYwTIB6F7v',
//       callbackURL: 'http://127.0.0.1:3000/auth/linkedin/callback',
//       scope: ['r_emailaddress', 'r_liteprofile']
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       process.nextTick(() => {
//         return done(null, profile);
//       });
//     }
//   )
// );
