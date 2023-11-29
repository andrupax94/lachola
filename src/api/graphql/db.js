const {connect} = require ('mongoose');

const connectDB = async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/tasksdb');
        console.log();('mongodb connected');
    } catch (error) {
        console.log('Error de conexión: ',error);
    }
}

export  {connectDB};