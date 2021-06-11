import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const user = $root.user = (() => {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    const user = {};

    user.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof user
         * @interface ICreateUserRequest
         * @property {string|null} [name] CreateUserRequest name
         * @property {string|null} [password] CreateUserRequest password
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof user
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {user.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest name.
         * @member {string} name
         * @memberof user.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.name = "";

        /**
         * CreateUserRequest password.
         * @member {string} password
         * @memberof user.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.password = "";

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.CreateUserRequest)
                return object;
            let message = new $root.user.CreateUserRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.CreateUserRequest
         * @static
         * @param {user.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.password = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof user.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRequest;
    })();

    user.CreateUserResponse = (function() {

        /**
         * Properties of a CreateUserResponse.
         * @memberof user
         * @interface ICreateUserResponse
         * @property {number|null} [id] CreateUserResponse id
         * @property {string|null} [name] CreateUserResponse name
         */

        /**
         * Constructs a new CreateUserResponse.
         * @memberof user
         * @classdesc Represents a CreateUserResponse.
         * @implements ICreateUserResponse
         * @constructor
         * @param {user.ICreateUserResponse=} [properties] Properties to set
         */
        function CreateUserResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserResponse id.
         * @member {number} id
         * @memberof user.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.id = 0;

        /**
         * CreateUserResponse name.
         * @member {string} name
         * @memberof user.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.name = "";

        /**
         * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.CreateUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.CreateUserResponse} CreateUserResponse
         */
        CreateUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.CreateUserResponse)
                return object;
            let message = new $root.user.CreateUserResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.CreateUserResponse
         * @static
         * @param {user.CreateUserResponse} message CreateUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateUserResponse to JSON.
         * @function toJSON
         * @memberof user.CreateUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserResponse;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {string|null} [name] LoginRequest name
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest name.
         * @member {string} name
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.name = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            let message = new $root.user.LoginRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.password = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    user.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof user
         * @interface ILoginResponse
         * @property {string|null} [token] LoginResponse token
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof user
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {user.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponse)
                return object;
            let message = new $root.user.LoginResponse();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponse
         * @static
         * @param {user.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof user.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    user.GetUserRequest = (function() {

        /**
         * Properties of a GetUserRequest.
         * @memberof user
         * @interface IGetUserRequest
         * @property {number|null} [id] GetUserRequest id
         */

        /**
         * Constructs a new GetUserRequest.
         * @memberof user
         * @classdesc Represents a GetUserRequest.
         * @implements IGetUserRequest
         * @constructor
         * @param {user.IGetUserRequest=} [properties] Properties to set
         */
        function GetUserRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRequest id.
         * @member {number} id
         * @memberof user.GetUserRequest
         * @instance
         */
        GetUserRequest.prototype.id = 0;

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetUserRequest} GetUserRequest
         */
        GetUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetUserRequest)
                return object;
            let message = new $root.user.GetUserRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetUserRequest
         * @static
         * @param {user.GetUserRequest} message GetUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetUserRequest to JSON.
         * @function toJSON
         * @memberof user.GetUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserRequest;
    })();

    user.GetUserResponse = (function() {

        /**
         * Properties of a GetUserResponse.
         * @memberof user
         * @interface IGetUserResponse
         * @property {number|null} [id] GetUserResponse id
         * @property {string|null} [name] GetUserResponse name
         */

        /**
         * Constructs a new GetUserResponse.
         * @memberof user
         * @classdesc Represents a GetUserResponse.
         * @implements IGetUserResponse
         * @constructor
         * @param {user.IGetUserResponse=} [properties] Properties to set
         */
        function GetUserResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResponse id.
         * @member {number} id
         * @memberof user.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.id = 0;

        /**
         * GetUserResponse name.
         * @member {string} name
         * @memberof user.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.name = "";

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetUserResponse} GetUserResponse
         */
        GetUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetUserResponse)
                return object;
            let message = new $root.user.GetUserResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetUserResponse
         * @static
         * @param {user.GetUserResponse} message GetUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GetUserResponse to JSON.
         * @function toJSON
         * @memberof user.GetUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponse;
    })();

    user.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof user
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Callback as used by {@link user.UserService#createUser}.
         * @memberof user.UserService
         * @typedef CreateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.CreateUserResponse} [response] CreateUserResponse
         */

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof user.UserService
         * @instance
         * @param {user.ICreateUserRequest} request CreateUserRequest message or plain object
         * @param {user.UserService.CreateUserCallback} callback Node-style callback called with the error, if any, and CreateUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.createUser = function createUser(request, callback) {
            return this.rpcCall(createUser, $root.user.CreateUserRequest, $root.user.CreateUserResponse, request, callback);
        }, "name", { value: "CreateUser" });

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof user.UserService
         * @instance
         * @param {user.ICreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Promise<user.CreateUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#login}.
         * @memberof user.UserService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls Login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @param {user.UserService.LoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.user.LoginRequest, $root.user.LoginResponse, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<user.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getUser}.
         * @memberof user.UserService
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.GetUserResponse} [response] GetUserResponse
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof user.UserService
         * @instance
         * @param {user.IGetUserRequest} request GetUserRequest message or plain object
         * @param {user.UserService.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.user.GetUserRequest, $root.user.GetUserResponse, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof user.UserService
         * @instance
         * @param {user.IGetUserRequest} request GetUserRequest message or plain object
         * @returns {Promise<user.GetUserResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    return user;
})();