import * as $protobuf from "protobufjs";
/** Namespace user. */
export namespace user {

    /** Properties of a CreateUserRequest. */
    interface ICreateUserRequest {

        /** CreateUserRequest name */
        name?: (string|null);

        /** CreateUserRequest password */
        password?: (string|null);
    }

    /** Represents a CreateUserRequest. */
    class CreateUserRequest implements ICreateUserRequest {

        /**
         * Constructs a new CreateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ICreateUserRequest);

        /** CreateUserRequest name. */
        public name: string;

        /** CreateUserRequest password. */
        public password: string;

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.CreateUserRequest;

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @param message CreateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserResponse. */
    interface ICreateUserResponse {

        /** CreateUserResponse id */
        id?: (number|null);

        /** CreateUserResponse name */
        name?: (string|null);
    }

    /** Represents a CreateUserResponse. */
    class CreateUserResponse implements ICreateUserResponse {

        /**
         * Constructs a new CreateUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ICreateUserResponse);

        /** CreateUserResponse id. */
        public id: number;

        /** CreateUserResponse name. */
        public name: string;

        /**
         * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.CreateUserResponse;

        /**
         * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
         * @param message CreateUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest name */
        name?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest name. */
        public name: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse token */
        token?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse token. */
        public token: string;

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserRequest. */
    interface IGetUserRequest {

        /** GetUserRequest id */
        id?: (number|null);
    }

    /** Represents a GetUserRequest. */
    class GetUserRequest implements IGetUserRequest {

        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserRequest);

        /** GetUserRequest id. */
        public id: number;

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserResponse. */
    interface IGetUserResponse {

        /** GetUserResponse id */
        id?: (number|null);

        /** GetUserResponse name */
        name?: (string|null);
    }

    /** Represents a GetUserResponse. */
    class GetUserResponse implements IGetUserResponse {

        /**
         * Constructs a new GetUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserResponse);

        /** GetUserResponse id. */
        public id: number;

        /** GetUserResponse name. */
        public name: string;

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserResponse;

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @param message GetUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls CreateUser.
         * @param request CreateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateUserResponse
         */
        public createUser(request: user.ICreateUserRequest, callback: user.UserService.CreateUserCallback): void;

        /**
         * Calls CreateUser.
         * @param request CreateUserRequest message or plain object
         * @returns Promise
         */
        public createUser(request: user.ICreateUserRequest): Promise<user.CreateUserResponse>;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public login(request: user.ILoginRequest, callback: user.UserService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: user.ILoginRequest): Promise<user.LoginResponse>;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserResponse
         */
        public getUser(request: user.IGetUserRequest, callback: user.UserService.GetUserCallback): void;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(request: user.IGetUserRequest): Promise<user.GetUserResponse>;
    }

    namespace UserService {

        /**
         * Callback as used by {@link user.UserService#createUser}.
         * @param error Error, if any
         * @param [response] CreateUserResponse
         */
        type CreateUserCallback = (error: (Error|null), response?: user.CreateUserResponse) => void;

        /**
         * Callback as used by {@link user.UserService#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#getUser}.
         * @param error Error, if any
         * @param [response] GetUserResponse
         */
        type GetUserCallback = (error: (Error|null), response?: user.GetUserResponse) => void;
    }
}
