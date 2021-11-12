import { Actor } from '../../../../src'
import World from '../../World'
import { Shout } from '../types'
import { typeMessage } from './interactions/typeMessage'
import { clickShoutButton } from './interactions/clickShoutButton'

export const shout: Shout = (message) => {
  return (actor: Actor<World>) => {
    actor.attemptsTo(typeMessage(message))
    actor.attemptsTo(clickShoutButton())
  }
}