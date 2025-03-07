export interface AuthState {
    logged: boolean;
    userName: string;
    login?(userName:string):void;
    logout?():void;
};