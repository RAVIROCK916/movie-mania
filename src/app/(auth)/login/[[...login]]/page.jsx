import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <SignIn path="/login" />
  )
}
export default page