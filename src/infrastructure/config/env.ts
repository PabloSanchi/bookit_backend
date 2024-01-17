export default () => ({
    port: parseInt(process.env.PORT) || 8080,
    openai: {
        apiKey: process.env.OPENAI_API_KEY || 'no-key',
    },
});
