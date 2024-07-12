import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const FRONTEND_MAIN_URL = document.location.origin;

const doAPIRequest = async (
  route,
  method = "get",
  payload = null,
  cType = "application/json"
) => {
  try {
    const url = BACKEND_URL + route;
    const headers = cType
      ? {
          "Content-Type": cType,
        }
      : null;

    const response = await axios.request({
      method,
      url,
      headers,
      data: payload,
    });

    if (response.status === 404) {
      throw new Error("User not found");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

export const sendToBitrix = (payload) => {
  return doAPIRequest("/users/bitrix", "post", {
    ...payload,
    source: "client-website",
  });
};

export const getHTML = async (lang) => {
  return doAPIRequest(`/adverts/how-to/${lang}`, "get", null, "text/html");
};

export const getAboutHTML = async (lang) => {
  return doAPIRequest(`/adverts/about/${lang}`, "get", null, "text/html");
};

export const uploadCV = async (file, phone) => {
  if (!file) return;
  return doAPIRequest('/users/file-upload', 'post', {
    filename: file,
    phone
  }, 'multipart/form-data');
}

export const sendCVToEmail = async (options) => {
  if (!options.fileType || !options.fileContents) return;
  const { userName, fileType, fileContents, fileName, emailTo } = options;


    const subject = `Резюме (корот хаим) кандидата ${userName}`;
    const html = `
      <h1>Резюме (корот хаим) кандидата ${userName}</h1>
      <p>Прикреплено во вложении к этому письму.</p>
      <p><b>Отправлено непосредственно с умного сайта</b></p>
    `;

    const payload = {
      to: emailTo,
      subject,
      html,
      attachments: [
        {
          contentType: fileType,
          content: fileContents,
          filename: fileName,
          encoding: "base64",
        },
      ],
    };

   return doAPIRequest('/users/to-email', 'post', payload);


};

export const regNewUser = async (payload) => {
  // no contenttype header
  return doAPIRequest("/auth/register", "post", payload, null);
};

export const authLogin = async (login, password, rememberMe) => {
  const response = await doAPIRequest("/auth/login", "post", { email: login, password });
  
  if (!response) {
    //alert('User not found');
  } else {
    if (rememberMe) {
      const token = response.token;
      return localStorage.setItem('avielsmart-jwt', token);
    }
  }
  
  
  return localStorage.clear();
}

export const regNewCompany = async (payload) => {
  return doAPIRequest("/auth/register-company", "post", payload);
};

export const sendEmail = async (titleString, logInString, password, eMail) => {
  return doAPIRequest("/users/to-email", "post", {
    to: eMail,
    subject: `AvielJobs: ${titleString}`,
    html: `<p>${password}</p><p><a href='${FRONTEND_MAIN_URL}/login'>${logInString}</a></p>`,
    attachments: [],
  });
};

export const sendVerificationEmail = async (eMail) => {
  return doAPIRequest("/auth/email", "post", { eMail });
};

export const sendVerificationCode = async (phone) => {
  if (phone.startsWith('0')) phone = phone.replace('0', '+972');
  return doAPIRequest("/auth/otp", "post", { phone });
};

export const sendVerificationCodeConfirmation = async (phone, otp) => {
  if (phone.startsWith('0')) phone = phone.replace('0', '+972');
  return doAPIRequest("/auth/otp-verify", "post", { phone, otp });
};

export const getJobs = () => {
  return doAPIRequest("/jobs");
}

export const searchJobs = (payload) => {
  const urlParams = new URLSearchParams(payload);
  return doAPIRequest(`/jobs/search?${urlParams}`);
}
