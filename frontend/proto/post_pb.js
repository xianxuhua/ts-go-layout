import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const post = $root.post = (() => {

    /**
     * Namespace post.
     * @exports post
     * @namespace
     */
    const post = {};

    post.GetPostDetailRequest = (function() {

        /**
         * Properties of a GetPostDetailRequest.
         * @memberof post
         * @interface IGetPostDetailRequest
         * @property {number|null} [id] GetPostDetailRequest id
         */

        /**
         * Constructs a new GetPostDetailRequest.
         * @memberof post
         * @classdesc Represents a GetPostDetailRequest.
         * @implements IGetPostDetailRequest
         * @constructor
         * @param {post.IGetPostDetailRequest=} [properties] Properties to set
         */
        function GetPostDetailRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPostDetailRequest id.
         * @member {number} id
         * @memberof post.GetPostDetailRequest
         * @instance
         */
        GetPostDetailRequest.prototype.id = 0;

        /**
         * Creates a GetPostDetailRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetPostDetailRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetPostDetailRequest} GetPostDetailRequest
         */
        GetPostDetailRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetPostDetailRequest)
                return object;
            let message = new $root.post.GetPostDetailRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetPostDetailRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetPostDetailRequest
         * @static
         * @param {post.GetPostDetailRequest} message GetPostDetailRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPostDetailRequest.toObject = function toObject(message, options) {
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
         * Converts this GetPostDetailRequest to JSON.
         * @function toJSON
         * @memberof post.GetPostDetailRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPostDetailRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPostDetailRequest;
    })();

    post.GetUserResponse = (function() {

        /**
         * Properties of a GetUserResponse.
         * @memberof post
         * @interface IGetUserResponse
         * @property {number|null} [id] GetUserResponse id
         * @property {string|null} [name] GetUserResponse name
         */

        /**
         * Constructs a new GetUserResponse.
         * @memberof post
         * @classdesc Represents a GetUserResponse.
         * @implements IGetUserResponse
         * @constructor
         * @param {post.IGetUserResponse=} [properties] Properties to set
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
         * @memberof post.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.id = 0;

        /**
         * GetUserResponse name.
         * @member {string} name
         * @memberof post.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.name = "";

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetUserResponse} GetUserResponse
         */
        GetUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetUserResponse)
                return object;
            let message = new $root.post.GetUserResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetUserResponse
         * @static
         * @param {post.GetUserResponse} message GetUserResponse
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
         * @memberof post.GetUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponse;
    })();

    post.GetPostDetailResponse = (function() {

        /**
         * Properties of a GetPostDetailResponse.
         * @memberof post
         * @interface IGetPostDetailResponse
         * @property {number|null} [id] GetPostDetailResponse id
         * @property {string|null} [title] GetPostDetailResponse title
         * @property {string|null} [content] GetPostDetailResponse content
         * @property {post.IGetUserResponse|null} [user] GetPostDetailResponse user
         */

        /**
         * Constructs a new GetPostDetailResponse.
         * @memberof post
         * @classdesc Represents a GetPostDetailResponse.
         * @implements IGetPostDetailResponse
         * @constructor
         * @param {post.IGetPostDetailResponse=} [properties] Properties to set
         */
        function GetPostDetailResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPostDetailResponse id.
         * @member {number} id
         * @memberof post.GetPostDetailResponse
         * @instance
         */
        GetPostDetailResponse.prototype.id = 0;

        /**
         * GetPostDetailResponse title.
         * @member {string} title
         * @memberof post.GetPostDetailResponse
         * @instance
         */
        GetPostDetailResponse.prototype.title = "";

        /**
         * GetPostDetailResponse content.
         * @member {string} content
         * @memberof post.GetPostDetailResponse
         * @instance
         */
        GetPostDetailResponse.prototype.content = "";

        /**
         * GetPostDetailResponse user.
         * @member {post.IGetUserResponse|null|undefined} user
         * @memberof post.GetPostDetailResponse
         * @instance
         */
        GetPostDetailResponse.prototype.user = null;

        /**
         * Creates a GetPostDetailResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetPostDetailResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetPostDetailResponse} GetPostDetailResponse
         */
        GetPostDetailResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetPostDetailResponse)
                return object;
            let message = new $root.post.GetPostDetailResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".post.GetPostDetailResponse.user: object expected");
                message.user = $root.post.GetUserResponse.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPostDetailResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetPostDetailResponse
         * @static
         * @param {post.GetPostDetailResponse} message GetPostDetailResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPostDetailResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.title = "";
                object.content = "";
                object.user = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.post.GetUserResponse.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this GetPostDetailResponse to JSON.
         * @function toJSON
         * @memberof post.GetPostDetailResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPostDetailResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPostDetailResponse;
    })();

    post.CreatePostRequest = (function() {

        /**
         * Properties of a CreatePostRequest.
         * @memberof post
         * @interface ICreatePostRequest
         * @property {string|null} [title] CreatePostRequest title
         * @property {string|null} [content] CreatePostRequest content
         */

        /**
         * Constructs a new CreatePostRequest.
         * @memberof post
         * @classdesc Represents a CreatePostRequest.
         * @implements ICreatePostRequest
         * @constructor
         * @param {post.ICreatePostRequest=} [properties] Properties to set
         */
        function CreatePostRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePostRequest title.
         * @member {string} title
         * @memberof post.CreatePostRequest
         * @instance
         */
        CreatePostRequest.prototype.title = "";

        /**
         * CreatePostRequest content.
         * @member {string} content
         * @memberof post.CreatePostRequest
         * @instance
         */
        CreatePostRequest.prototype.content = "";

        /**
         * Creates a CreatePostRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.CreatePostRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.CreatePostRequest} CreatePostRequest
         */
        CreatePostRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.post.CreatePostRequest)
                return object;
            let message = new $root.post.CreatePostRequest();
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a CreatePostRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.CreatePostRequest
         * @static
         * @param {post.CreatePostRequest} message CreatePostRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePostRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.content = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this CreatePostRequest to JSON.
         * @function toJSON
         * @memberof post.CreatePostRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePostRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePostRequest;
    })();

    post.CreatePostResponse = (function() {

        /**
         * Properties of a CreatePostResponse.
         * @memberof post
         * @interface ICreatePostResponse
         * @property {number|null} [id] CreatePostResponse id
         * @property {string|null} [title] CreatePostResponse title
         * @property {string|null} [content] CreatePostResponse content
         */

        /**
         * Constructs a new CreatePostResponse.
         * @memberof post
         * @classdesc Represents a CreatePostResponse.
         * @implements ICreatePostResponse
         * @constructor
         * @param {post.ICreatePostResponse=} [properties] Properties to set
         */
        function CreatePostResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePostResponse id.
         * @member {number} id
         * @memberof post.CreatePostResponse
         * @instance
         */
        CreatePostResponse.prototype.id = 0;

        /**
         * CreatePostResponse title.
         * @member {string} title
         * @memberof post.CreatePostResponse
         * @instance
         */
        CreatePostResponse.prototype.title = "";

        /**
         * CreatePostResponse content.
         * @member {string} content
         * @memberof post.CreatePostResponse
         * @instance
         */
        CreatePostResponse.prototype.content = "";

        /**
         * Creates a CreatePostResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.CreatePostResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.CreatePostResponse} CreatePostResponse
         */
        CreatePostResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.post.CreatePostResponse)
                return object;
            let message = new $root.post.CreatePostResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a CreatePostResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.CreatePostResponse
         * @static
         * @param {post.CreatePostResponse} message CreatePostResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePostResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.title = "";
                object.content = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this CreatePostResponse to JSON.
         * @function toJSON
         * @memberof post.CreatePostResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePostResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePostResponse;
    })();

    post.GetPostListRequest = (function() {

        /**
         * Properties of a GetPostListRequest.
         * @memberof post
         * @interface IGetPostListRequest
         */

        /**
         * Constructs a new GetPostListRequest.
         * @memberof post
         * @classdesc Represents a GetPostListRequest.
         * @implements IGetPostListRequest
         * @constructor
         * @param {post.IGetPostListRequest=} [properties] Properties to set
         */
        function GetPostListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a GetPostListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetPostListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetPostListRequest} GetPostListRequest
         */
        GetPostListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetPostListRequest)
                return object;
            return new $root.post.GetPostListRequest();
        };

        /**
         * Creates a plain object from a GetPostListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetPostListRequest
         * @static
         * @param {post.GetPostListRequest} message GetPostListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPostListRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetPostListRequest to JSON.
         * @function toJSON
         * @memberof post.GetPostListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPostListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPostListRequest;
    })();

    post.GetPostListItem = (function() {

        /**
         * Properties of a GetPostListItem.
         * @memberof post
         * @interface IGetPostListItem
         * @property {number|null} [id] GetPostListItem id
         * @property {string|null} [title] GetPostListItem title
         * @property {string|null} [content] GetPostListItem content
         */

        /**
         * Constructs a new GetPostListItem.
         * @memberof post
         * @classdesc Represents a GetPostListItem.
         * @implements IGetPostListItem
         * @constructor
         * @param {post.IGetPostListItem=} [properties] Properties to set
         */
        function GetPostListItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPostListItem id.
         * @member {number} id
         * @memberof post.GetPostListItem
         * @instance
         */
        GetPostListItem.prototype.id = 0;

        /**
         * GetPostListItem title.
         * @member {string} title
         * @memberof post.GetPostListItem
         * @instance
         */
        GetPostListItem.prototype.title = "";

        /**
         * GetPostListItem content.
         * @member {string} content
         * @memberof post.GetPostListItem
         * @instance
         */
        GetPostListItem.prototype.content = "";

        /**
         * Creates a GetPostListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetPostListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetPostListItem} GetPostListItem
         */
        GetPostListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetPostListItem)
                return object;
            let message = new $root.post.GetPostListItem();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a GetPostListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetPostListItem
         * @static
         * @param {post.GetPostListItem} message GetPostListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPostListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.title = "";
                object.content = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this GetPostListItem to JSON.
         * @function toJSON
         * @memberof post.GetPostListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPostListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPostListItem;
    })();

    post.GetPostListResponse = (function() {

        /**
         * Properties of a GetPostListResponse.
         * @memberof post
         * @interface IGetPostListResponse
         * @property {number|null} [total] GetPostListResponse total
         * @property {Array.<post.IGetPostListItem>|null} [data] GetPostListResponse data
         */

        /**
         * Constructs a new GetPostListResponse.
         * @memberof post
         * @classdesc Represents a GetPostListResponse.
         * @implements IGetPostListResponse
         * @constructor
         * @param {post.IGetPostListResponse=} [properties] Properties to set
         */
        function GetPostListResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPostListResponse total.
         * @member {number} total
         * @memberof post.GetPostListResponse
         * @instance
         */
        GetPostListResponse.prototype.total = 0;

        /**
         * GetPostListResponse data.
         * @member {Array.<post.IGetPostListItem>} data
         * @memberof post.GetPostListResponse
         * @instance
         */
        GetPostListResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetPostListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof post.GetPostListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {post.GetPostListResponse} GetPostListResponse
         */
        GetPostListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.post.GetPostListResponse)
                return object;
            let message = new $root.post.GetPostListResponse();
            if (object.total != null)
                message.total = object.total | 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".post.GetPostListResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".post.GetPostListResponse.data: object expected");
                    message.data[i] = $root.post.GetPostListItem.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPostListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof post.GetPostListResponse
         * @static
         * @param {post.GetPostListResponse} message GetPostListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPostListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.total = 0;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.post.GetPostListItem.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPostListResponse to JSON.
         * @function toJSON
         * @memberof post.GetPostListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPostListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPostListResponse;
    })();

    post.PostService = (function() {

        /**
         * Constructs a new PostService service.
         * @memberof post
         * @classdesc Represents a PostService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PostService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PostService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PostService;

        /**
         * Callback as used by {@link post.PostService#getPostList}.
         * @memberof post.PostService
         * @typedef GetPostListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {post.GetPostListResponse} [response] GetPostListResponse
         */

        /**
         * Calls GetPostList.
         * @function getPostList
         * @memberof post.PostService
         * @instance
         * @param {post.IGetPostListRequest} request GetPostListRequest message or plain object
         * @param {post.PostService.GetPostListCallback} callback Node-style callback called with the error, if any, and GetPostListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PostService.prototype.getPostList = function getPostList(request, callback) {
            return this.rpcCall(getPostList, $root.post.GetPostListRequest, $root.post.GetPostListResponse, request, callback);
        }, "name", { value: "GetPostList" });

        /**
         * Calls GetPostList.
         * @function getPostList
         * @memberof post.PostService
         * @instance
         * @param {post.IGetPostListRequest} request GetPostListRequest message or plain object
         * @returns {Promise<post.GetPostListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link post.PostService#getPostDetail}.
         * @memberof post.PostService
         * @typedef GetPostDetailCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {post.GetPostDetailResponse} [response] GetPostDetailResponse
         */

        /**
         * Calls GetPostDetail.
         * @function getPostDetail
         * @memberof post.PostService
         * @instance
         * @param {post.IGetPostDetailRequest} request GetPostDetailRequest message or plain object
         * @param {post.PostService.GetPostDetailCallback} callback Node-style callback called with the error, if any, and GetPostDetailResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PostService.prototype.getPostDetail = function getPostDetail(request, callback) {
            return this.rpcCall(getPostDetail, $root.post.GetPostDetailRequest, $root.post.GetPostDetailResponse, request, callback);
        }, "name", { value: "GetPostDetail" });

        /**
         * Calls GetPostDetail.
         * @function getPostDetail
         * @memberof post.PostService
         * @instance
         * @param {post.IGetPostDetailRequest} request GetPostDetailRequest message or plain object
         * @returns {Promise<post.GetPostDetailResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link post.PostService#createPost}.
         * @memberof post.PostService
         * @typedef CreatePostCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {post.CreatePostResponse} [response] CreatePostResponse
         */

        /**
         * Calls CreatePost.
         * @function createPost
         * @memberof post.PostService
         * @instance
         * @param {post.ICreatePostRequest} request CreatePostRequest message or plain object
         * @param {post.PostService.CreatePostCallback} callback Node-style callback called with the error, if any, and CreatePostResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PostService.prototype.createPost = function createPost(request, callback) {
            return this.rpcCall(createPost, $root.post.CreatePostRequest, $root.post.CreatePostResponse, request, callback);
        }, "name", { value: "CreatePost" });

        /**
         * Calls CreatePost.
         * @function createPost
         * @memberof post.PostService
         * @instance
         * @param {post.ICreatePostRequest} request CreatePostRequest message or plain object
         * @returns {Promise<post.CreatePostResponse>} Promise
         * @variation 2
         */

        return PostService;
    })();

    return post;
})();