const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize(passport, userEmail, userID) {
    const authenticateUser = async (email, password, done) => {
        const user = userEmail(email)

        // if the user is not in the db, error out
        if(user == null){
            return done(null,false, { message: "No user with that email"});
        }
        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null,user);
            } else {
                return done(null, false, { message: "message: Password does not match in our db",
            });
            }
        } catch (error) {
            return done(e);

        }
    }
    passport.use(new LocalStrategy({usernameField: "email"}, authenticateUser));
    passport.serializeUser((user,done) => done(null,user.id))
    passport.deserializeUser((user,done) => {
        return done(null,userId(id))})