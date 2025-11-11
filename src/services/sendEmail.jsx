import emailjs from "@emailjs/browser";

const handleSendEmail = async (input) => {

    try {
        const templateParams = {
            type: input.type,
            name: input.name,
            phone: input.phoneNumber,
            content: input.content,
        };

        await emailjs.send(
            'service_3txp4ii',
            'template_pw9nmus',
            templateParams, // 폼 대신 templateParams 참조
            'CxIRa9-N4GekocrV2'
        )
        console.log('정상 발송');
        return { success: true };
    } catch (error) {
        console.error('오류 발생', error.text);
        throw error;
    }
}

export default handleSendEmail;