import { Injectable } from '@nestjs/common';
import { ScimUser, ScimUsers } from 'src/PlatformAPI';
import { SCIMUsersShadowUsersApi } from "../PlatformAPI/scim-users-shadow-users-api";;

@Injectable()
export class UserService {
    private destination = { destinationName: "apiAccessDestination"};
    
    async getUsers() {
        const user : ScimUsers = await SCIMUsersShadowUsersApi.getAllUsersUsingGet().execute(this.destination);
        return user;
    }

    async getUser(id : string){
        const user : ScimUser = await SCIMUsersShadowUsersApi.getUserUsingGet(id).execute(this.destination);
        return user;
    }
}
