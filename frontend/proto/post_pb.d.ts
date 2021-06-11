import * as $protobuf from "protobufjs";
/** Namespace post. */
export namespace post {

    /** Properties of a GetPostDetailRequest. */
    interface IGetPostDetailRequest {

        /** GetPostDetailRequest id */
        id?: (number|null);
    }

    /** Represents a GetPostDetailRequest. */
    class GetPostDetailRequest implements IGetPostDetailRequest {

        /**
         * Constructs a new GetPostDetailRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.IGetPostDetailRequest);

        /** GetPostDetailRequest id. */
        public id: number;

        /**
         * Creates a GetPostDetailRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPostDetailRequest
         */
        public static fromObject(object: { [k: string]: any }): post.GetPostDetailRequest;

        /**
         * Creates a plain object from a GetPostDetailRequest message. Also converts values to other types if specified.
         * @param message GetPostDetailRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetPostDetailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPostDetailRequest to JSON.
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
        constructor(properties?: post.IGetUserResponse);

        /** GetUserResponse id. */
        public id: number;

        /** GetUserResponse name. */
        public name: string;

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResponse
         */
        public static fromObject(object: { [k: string]: any }): post.GetUserResponse;

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @param message GetUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPostDetailResponse. */
    interface IGetPostDetailResponse {

        /** GetPostDetailResponse id */
        id?: (number|null);

        /** GetPostDetailResponse title */
        title?: (string|null);

        /** GetPostDetailResponse content */
        content?: (string|null);

        /** GetPostDetailResponse user */
        user?: (post.IGetUserResponse|null);
    }

    /** Represents a GetPostDetailResponse. */
    class GetPostDetailResponse implements IGetPostDetailResponse {

        /**
         * Constructs a new GetPostDetailResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.IGetPostDetailResponse);

        /** GetPostDetailResponse id. */
        public id: number;

        /** GetPostDetailResponse title. */
        public title: string;

        /** GetPostDetailResponse content. */
        public content: string;

        /** GetPostDetailResponse user. */
        public user?: (post.IGetUserResponse|null);

        /**
         * Creates a GetPostDetailResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPostDetailResponse
         */
        public static fromObject(object: { [k: string]: any }): post.GetPostDetailResponse;

        /**
         * Creates a plain object from a GetPostDetailResponse message. Also converts values to other types if specified.
         * @param message GetPostDetailResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetPostDetailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPostDetailResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePostRequest. */
    interface ICreatePostRequest {

        /** CreatePostRequest title */
        title?: (string|null);

        /** CreatePostRequest content */
        content?: (string|null);
    }

    /** Represents a CreatePostRequest. */
    class CreatePostRequest implements ICreatePostRequest {

        /**
         * Constructs a new CreatePostRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.ICreatePostRequest);

        /** CreatePostRequest title. */
        public title: string;

        /** CreatePostRequest content. */
        public content: string;

        /**
         * Creates a CreatePostRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePostRequest
         */
        public static fromObject(object: { [k: string]: any }): post.CreatePostRequest;

        /**
         * Creates a plain object from a CreatePostRequest message. Also converts values to other types if specified.
         * @param message CreatePostRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.CreatePostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePostRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePostResponse. */
    interface ICreatePostResponse {

        /** CreatePostResponse id */
        id?: (number|null);

        /** CreatePostResponse title */
        title?: (string|null);

        /** CreatePostResponse content */
        content?: (string|null);
    }

    /** Represents a CreatePostResponse. */
    class CreatePostResponse implements ICreatePostResponse {

        /**
         * Constructs a new CreatePostResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.ICreatePostResponse);

        /** CreatePostResponse id. */
        public id: number;

        /** CreatePostResponse title. */
        public title: string;

        /** CreatePostResponse content. */
        public content: string;

        /**
         * Creates a CreatePostResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePostResponse
         */
        public static fromObject(object: { [k: string]: any }): post.CreatePostResponse;

        /**
         * Creates a plain object from a CreatePostResponse message. Also converts values to other types if specified.
         * @param message CreatePostResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.CreatePostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePostResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPostListRequest. */
    interface IGetPostListRequest {
    }

    /** Represents a GetPostListRequest. */
    class GetPostListRequest implements IGetPostListRequest {

        /**
         * Constructs a new GetPostListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.IGetPostListRequest);

        /**
         * Creates a GetPostListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPostListRequest
         */
        public static fromObject(object: { [k: string]: any }): post.GetPostListRequest;

        /**
         * Creates a plain object from a GetPostListRequest message. Also converts values to other types if specified.
         * @param message GetPostListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetPostListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPostListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPostListItem. */
    interface IGetPostListItem {

        /** GetPostListItem id */
        id?: (number|null);

        /** GetPostListItem title */
        title?: (string|null);

        /** GetPostListItem content */
        content?: (string|null);
    }

    /** Represents a GetPostListItem. */
    class GetPostListItem implements IGetPostListItem {

        /**
         * Constructs a new GetPostListItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.IGetPostListItem);

        /** GetPostListItem id. */
        public id: number;

        /** GetPostListItem title. */
        public title: string;

        /** GetPostListItem content. */
        public content: string;

        /**
         * Creates a GetPostListItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPostListItem
         */
        public static fromObject(object: { [k: string]: any }): post.GetPostListItem;

        /**
         * Creates a plain object from a GetPostListItem message. Also converts values to other types if specified.
         * @param message GetPostListItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetPostListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPostListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPostListResponse. */
    interface IGetPostListResponse {

        /** GetPostListResponse total */
        total?: (number|null);

        /** GetPostListResponse data */
        data?: (post.IGetPostListItem[]|null);
    }

    /** Represents a GetPostListResponse. */
    class GetPostListResponse implements IGetPostListResponse {

        /**
         * Constructs a new GetPostListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: post.IGetPostListResponse);

        /** GetPostListResponse total. */
        public total: number;

        /** GetPostListResponse data. */
        public data: post.IGetPostListItem[];

        /**
         * Creates a GetPostListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPostListResponse
         */
        public static fromObject(object: { [k: string]: any }): post.GetPostListResponse;

        /**
         * Creates a plain object from a GetPostListResponse message. Also converts values to other types if specified.
         * @param message GetPostListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: post.GetPostListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPostListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a PostService */
    class PostService extends $protobuf.rpc.Service {

        /**
         * Constructs a new PostService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls GetPostList.
         * @param request GetPostListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPostListResponse
         */
        public getPostList(request: post.IGetPostListRequest, callback: post.PostService.GetPostListCallback): void;

        /**
         * Calls GetPostList.
         * @param request GetPostListRequest message or plain object
         * @returns Promise
         */
        public getPostList(request: post.IGetPostListRequest): Promise<post.GetPostListResponse>;

        /**
         * Calls GetPostDetail.
         * @param request GetPostDetailRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPostDetailResponse
         */
        public getPostDetail(request: post.IGetPostDetailRequest, callback: post.PostService.GetPostDetailCallback): void;

        /**
         * Calls GetPostDetail.
         * @param request GetPostDetailRequest message or plain object
         * @returns Promise
         */
        public getPostDetail(request: post.IGetPostDetailRequest): Promise<post.GetPostDetailResponse>;

        /**
         * Calls CreatePost.
         * @param request CreatePostRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreatePostResponse
         */
        public createPost(request: post.ICreatePostRequest, callback: post.PostService.CreatePostCallback): void;

        /**
         * Calls CreatePost.
         * @param request CreatePostRequest message or plain object
         * @returns Promise
         */
        public createPost(request: post.ICreatePostRequest): Promise<post.CreatePostResponse>;
    }

    namespace PostService {

        /**
         * Callback as used by {@link post.PostService#getPostList}.
         * @param error Error, if any
         * @param [response] GetPostListResponse
         */
        type GetPostListCallback = (error: (Error|null), response?: post.GetPostListResponse) => void;

        /**
         * Callback as used by {@link post.PostService#getPostDetail}.
         * @param error Error, if any
         * @param [response] GetPostDetailResponse
         */
        type GetPostDetailCallback = (error: (Error|null), response?: post.GetPostDetailResponse) => void;

        /**
         * Callback as used by {@link post.PostService#createPost}.
         * @param error Error, if any
         * @param [response] CreatePostResponse
         */
        type CreatePostCallback = (error: (Error|null), response?: post.CreatePostResponse) => void;
    }
}
