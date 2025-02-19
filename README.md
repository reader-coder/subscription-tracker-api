# Environment Variables Documentation

This document provides details on the environment variables used in the project.

## 1. **Server Configuration**
| Variable   | Description                      | Example Value |
|------------|----------------------------------|--------------|
| `PORT`     | The port on which the server runs | `3000`       |
| `SERVER_URL` | Base URL of the server | `http://localhost:3000` |
| `NODE_ENV` | The environment in which the application is running (`development`, `production`, etc.) | `development` |

---

## 2. **Database Configuration**
| Variable   | Description                          | Example Value |
|------------|--------------------------------------|--------------|
| `DB_URI`   | MongoDB connection URI used to connect to the database | `mongodb+srv://user:password@cluster.mongodb.net/database?retryWrites=true&w=majority` |

> **Note:** Replace `user`, `password`, and `database` with actual credentials.

---

## 3. **Authentication (JWT)**
| Variable   | Description                          | Example Value |
|------------|--------------------------------------|--------------|
| `JWT_SECRET` | Secret key used to sign JWT tokens | `your_jwt_secret_key` |
| `JWT_EXPIRES_IN` | Expiration time for JWT tokens | `7d` (7 days) |

> **Security Note:** Keep `JWT_SECRET` secure and do not expose it in public repositories.

---

## 4. **Arcjet Configuration**
| Variable   | Description                      | Example Value |
|------------|----------------------------------|--------------|
| `ARCJET_KEY` | API key for Arcjet services | `your_arcjet_key` |
| `ARCJET_ENV` | The environment mode for Arcjet | `production` |

---

## 5. **Upstash (QStash) Configuration**
| Variable   | Description                          | Example Value |
|------------|--------------------------------------|--------------|
| `QSTASH_URL` | Base URL for Upstash QStash | `https://qstash.example.com` |
| `QSTASH_TOKEN` | Authentication token for Upstash QStash | `your_qstash_token` |
| `QSTASH_CURRENT_SIGNING_KEY` | Current signing key for Upstash QStash | `your_current_signing_key` |
| `QSTASH_NEXT_SIGNING_KEY` | Next signing key for Upstash QStash | `your_next_signing_key` |

> **Security Note:** Never expose `QSTASH_TOKEN` or signing keys in public repositories.

---

## **Security Recommendations:**
- Store sensitive credentials securely using a `.env` file and **never** commit them to version control.
- Use a secret manager (e.g., AWS Secrets Manager, HashiCorp Vault, or environment variable management tools).
- Regularly rotate API keys and secrets.

---

This documentation helps ensure secure and proper usage of environment variables in the project.

