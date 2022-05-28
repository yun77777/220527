const crypto = require('crypto');

crypto.createHash('sha512').update('pw1234').digest('base64');
crypto.createHash('sha512').update('pw1234').digest('hex');

const createSalt = () => {
    return new Promise((rs, rj) => {
        crypto.randomBytes(64, (err, buf) => {
            if(err) rj(err);
            rs(buf.toString('base64'));
        })
    });
};

let salt = '';
const createCryptoPassord = async (plainPassword) => {
    salt = await createSalt();
    console.log('## salt',salt);

    return new Promise((rs, rj) => {
        crypto.pbkdf2(plainPassword, salt, 100000, 64, 'sha512', (err, key) => {
            console.log('salt: ', salt);
            console.log('key: ', key.toString('base64'));
            if(err) rj(err);
            rs({password: key.toString('base64'), salt});
        });
    });
};

const res = createCryptoPassord('pw1234');
console.log(res);

console.log('## salt',salt);

const getCrpytoPassword = (plainPassword, salt) => {
    return new Promise((rs, rj) => {
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if(err) rj(err);
            rs({password: key.toString('base64'), salt})
        });
    });
};

console.log(getCrpytoPassword('pw1234',salt));