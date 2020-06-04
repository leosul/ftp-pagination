const ftp = require("basic-ftp");

const list = async() => {
    const client = new ftp.Client(0);
    let directories = []

    try {
        await client.access({
            host: "localhost",
            user: "custom",
            password: "root",
        });

        directories = await client.list('TWERE')
    } catch (err) {
        console.log(err)
    }
    client.close();

    return directories
};

module.exports = {
    list,
};