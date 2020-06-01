const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async function(req, res) {
    const domain = req.params.domain
    try {
        console.log('SSL', domain);
        let stdout, stderr

        if(domain.split('.').length > 2){
            ({ stdout, stderr } = await exec(`sudo certbot certonly -a webroot --webroot-path=/usr/share/nginx/html -n -d ${domain} --expand`));
        } else {
            ({ stdout, stderr } = await exec(`sudo certbot certonly -a webroot --webroot-path=/usr/share/nginx/html -n -d ${domain} -d www.${domain} --expand`));
        }

        console.log('stdout:', stdout);
        console.log('stderr:', stderr); 

        if(stdout){
            await exec(`sudo ./script/domain.sh ${domain}`)
            if(stdout.includes('Congratulations')){
                res.status(200).send({
                    success: true,
                    message: 'SSL successfully generated.'
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: 'SSL already exist.'
                })
            }
            exec('sudo service nginx restart')
        } else {
            res.status(400).send({
                success: false,
                message: 'unable to generate SSL'
            })
        }

    } catch (error) {
        console.log('SSL GENERATING - ERROR',error);
        await exec(`sudo ./script/restart.sh ${domain}`);
        res.status(400).send({
            success: false,
            message: 'error in generating SSL',
            error: error.message
        })
        exec('sudo service nginx restart')
    }

}
