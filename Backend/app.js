const fcm = require('fcm-notification');
const FCM = new fcm('./fcmexample-be9e1.json');
//const token = 'f_Z1t7LjzZ8:APA91bGCp3MzGmrlQtaa2KvrVUFIa0j0brAoYKORD1hZUPkoGFMYgzxWkj4a4hk98etY-IFn-z6QmOzYCd7lzqeD875aoWBFTs5K9mYj_9FRslaPAEyj8O6z7dL21LKRirN95loUB9JM';
const token = 'ea2RUUc8uw0:APA91bG-t3tJEBFOiZZUm8bfUMmrnptvJHP91Z99x_Vfmc8oW6Q-xdKMRbOzepagRz33DwBAFx4nUgT5glq1CQwQeXi8C9XOl-K_hFV9zyuzQghpuypUWlKCPCPQPg2oc1b_ku2xulnB';

const tokens = [
    'f_Z1t7LjzZ8:APA91bGCp3MzGmrlQtaa2KvrVUFIa0j0brAoYKORD1hZUPkoGFMYgzxWkj4a4hk98etY-IFn-z6QmOzYCd7lzqeD875aoWBFTs5K9mYj_9FRslaPAEyj8O6z7dL21LKRirN95loUB9JM',
    'ea2RUUc8uw0:APA91bG-t3tJEBFOiZZUm8bfUMmrnptvJHP91Z99x_Vfmc8oW6Q-xdKMRbOzepagRz33DwBAFx4nUgT5glq1CQwQeXi8C9XOl-K_hFV9zyuzQghpuypUWlKCPCPQPg2oc1b_ku2xulnB'
];

const message = {
    // data: {    //This is only optional, you can send any data
    //     score: '850',
    //     time: '2:45'
    // },
    notification: {
        title: 'Push notification',
        body: 'Thành công rồi'
    },
    token: token
};

setTimeout(() => {
    FCM.send(message, function (err, response) {
        if (err) {
            console.log('error found', err);
        } else {
            console.log('response here', response);
        }
    })
}, 2000);

const messages = {
    notification: {
        title: 'Push notification multi',
        body: 'Push multi device'
    },
    token: token
};

FCM.sendToMultipleToken(messages, tokens, function (err, response) {
    if (err) {
        console.log('err--', err);
    } else {
        console.log('response-----', response);
    }

})