import { PrismaClient } from "generated/prisma/client";



const prisma = new PrismaClient();

async function main(){
    const roles = [
        {
            name:"SuperAdmin",
            permission:{}
        },
        {
            name:"ADMIN",
            permission:{}
        },
        {
            name:"TEACHER",
            permission:{},
        },
        {
            name:"PARENT",
            permission:{}
        }
    ]

    for(const role of roles){
        await prisma.role.upsert({
            where:{
                name:role.name,
            },
            update: {},
            create:role,
        });
    }
    console.log("Roles seeded successfully");
}
main()
    .catch( (error) =>{
        console.error(error);
        process.exit(1);
    })
    .finally(async ()=> {
        await prisma.$disconnect();
    })

