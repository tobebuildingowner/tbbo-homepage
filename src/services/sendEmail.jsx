import emailjs from "@emailjs/browser";

const handleSendEmail = async (input) => {

    try {
        const templateParams = {
            type: input.type,
            name: input.name,
            phone: input.phone,
            contents: input.contents,
            route: input.route,
        };

        await emailjs.send(
            'service_09tf1ss',
            'template_uej8c8p',
            templateParams, // 폼 대신 templateParams 참조
            'AZpVNlFW2IsF2tFal'
        )
        console.log('정상 발송');
        return { success: true };
    } catch (error) {
        console.error('오류 발생', error.text);
        throw error;
    }
}

export default handleSendEmail;