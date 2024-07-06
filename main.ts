import { consumeMessage } from "./kafka/consumer";
import logger from "./logger";
import connectDb from "./utils/connectDb";

async function main() {
    try {
        connectDb();
        consumeMessage();
    } catch (error: any) {
        logger.error(error.message, error);
        process.exit(1);
    }
}

main();