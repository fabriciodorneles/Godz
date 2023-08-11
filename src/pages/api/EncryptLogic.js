import { randomBytes, createCipheriv, createDecipheriv } from 'crypto'

const localKey = process.env.MY_SECRET;


export function encryptedResponse (content, key = localKey) {
  try {
    const IV_LENGTH = 16 // For AES, this is always 16
    let iv = randomBytes(IV_LENGTH)
    let cipher = createCipheriv('aes-256-cbc', Buffer.from(key), iv)
    let encrypted = cipher.update(JSON.stringify(content))

    encrypted = Buffer.concat([encrypted, cipher.final()])

    const finalResult = iv.toString('hex') + ':' + encrypted.toString('hex');

    return { message: finalResult }
  } catch (err) {
    throw err
  }
}

export function decryptedPayload(content, key = localKey) {
  try {
    const { message } = JSON.parse(content);
    let textParts = message.split(':')
    let iv = Buffer.from(textParts.shift(), 'hex')
    let encryptedText = Buffer.from(textParts.join(':'), 'hex')
    let decipher = createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)

    decrypted = Buffer.concat([decrypted, decipher.final()])

    return decrypted.toString()
  } catch (err) {
    throw err
  }
}
