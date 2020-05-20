import { BaseCategory } from "./category";
import { User } from "./auth.model";

export interface Post {
  id: number
  title: string
  subtitle?: string
  content: string
  created_on: string
  modified_on: string
  category: BaseCategory
  user: User
}
