{

   interface Profile {
    name: string;
    age: number;
    email: string;
   }
   type ProfilePartial = Partial<Profile>


      const updateProfile = (profile : Profile, update : ProfilePartial) =>{
        return {...profile, ...update}
      }

      const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
      };

    //   console.log(updateProfile(myProfile, { age: 26 }));
      
}