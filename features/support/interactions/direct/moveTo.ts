import World from '../../World'
import { Location } from '../../../src/shouty'
import {Actor} from "../../../../src";
import {MoveTo} from "../types";

export const moveTo: MoveTo = (distance) => {
  return async (actor: Actor<World>) => {
    actor.world.shouty.moveTo(actor.name, new Location(distance, 0))
  }
}
