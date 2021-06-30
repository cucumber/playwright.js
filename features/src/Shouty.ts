import calculateDistance from './calculateDistance'
import { Message, Session } from './types'
import ShoutySession from './ShoutySession'
import Inbox from './Inbox'

export default class Shouty {
  private readonly sessionByUserId = new Map<string, ShoutySession>()

  makeSession(userId: string): Session {
    if (!this.sessionByUserId.has(userId)) {
      const inbox = new Inbox()
      const shoutySession = new ShoutySession(userId, inbox, this)
      this.sessionByUserId.set(userId, shoutySession)
    }
    return this.sessionByUserId.get(userId)
  }

  getSession(userId: string): ShoutySession {
    return this.sessionByUserId.get(userId)
  }

  broadcast(fromSession: ShoutySession, message: Message) {
    for (const session of this.sessionByUserId.values()) {
      const distance = calculateDistance(fromSession.coordinate, session.coordinate)
      if (distance <= 1000) {
        session.inbox.deliver(message)
      }
    }
  }
}
