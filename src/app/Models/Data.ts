import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Profile } from "./Profile";

export interface Data {
  profile:Profile,
  contact:Contact,
  education:Education[],
  experience:Experience[]
}
