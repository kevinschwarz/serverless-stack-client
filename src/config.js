export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_NoIlHtryp0hBHMPNU950K49100no3VChB8",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-kevin-schwarz"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://mng09373o0.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zrIEqLr4Q",
    APP_CLIENT_ID: "3k2c5o89c7cc1a164trejdfieu",
    IDENTITY_POOL_ID: "us-east-2:4a8c2278-42af-4dc5-93e5-4915b3dcb508"
  }
};