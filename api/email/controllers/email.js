'use strict';

module.exports = {
  send: async ctx => {
    const body = ctx.request.body;
    const sendTo = body.to;
    const from = body.from;
    const subject = body.subject;

    strapi.log.debug(
      `Trying to send an email to ${sendTo}`
    );

    try {
      const emailOptions = {
        to: sendTo,
        subject: from,
        subject: subject,
        html: body.text,
      };
      await strapi.plugins['email'].services.email.send(
        emailOptions
      );
      strapi.log.debug(`Email sent to ${sendTo}`);
      ctx.send({ message: 'Email sent' });
    } catch (err) {
      strapi.log.error(
        `Error sending email to ${sendTo}`,
        err
      );
      ctx.send({ error: 'Error while sending email. Please try again' });
    }
  },
};
