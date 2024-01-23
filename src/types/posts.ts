export default interface Posts {
  title: string,
  date: Date,
  description: string,
  categories: string[],
  draft: boolean
}