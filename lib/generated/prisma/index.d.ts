
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model Update
 * 
 */
export type Update = $Result.DefaultSelection<Prisma.$UpdatePayload>
/**
 * Model DonorComment
 * 
 */
export type DonorComment = $Result.DefaultSelection<Prisma.$DonorCommentPayload>
/**
 * Model DonorTransaction
 * 
 */
export type DonorTransaction = $Result.DefaultSelection<Prisma.$DonorTransactionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CampaignStatus: {
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const UserRole: {
  creator: 'creator',
  donor: 'donor',
  admin: 'admin',
  superAdmin: 'superAdmin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  active: 'active',
  inactive: 'inactive',
  banned: 'banned'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.update`: Exposes CRUD operations for the **Update** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Updates
    * const updates = await prisma.update.findMany()
    * ```
    */
  get update(): Prisma.UpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donorComment`: Exposes CRUD operations for the **DonorComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonorComments
    * const donorComments = await prisma.donorComment.findMany()
    * ```
    */
  get donorComment(): Prisma.DonorCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donorTransaction`: Exposes CRUD operations for the **DonorTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonorTransactions
    * const donorTransactions = await prisma.donorTransaction.findMany()
    * ```
    */
  get donorTransaction(): Prisma.DonorTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    FAQ: 'FAQ',
    Update: 'Update',
    DonorComment: 'DonorComment',
    DonorTransaction: 'DonorTransaction',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "fAQ" | "update" | "donorComment" | "donorTransaction" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      Update: {
        payload: Prisma.$UpdatePayload<ExtArgs>
        fields: Prisma.UpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          findFirst: {
            args: Prisma.UpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          findMany: {
            args: Prisma.UpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          create: {
            args: Prisma.UpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          createMany: {
            args: Prisma.UpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          delete: {
            args: Prisma.UpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          update: {
            args: Prisma.UpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          deleteMany: {
            args: Prisma.UpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          upsert: {
            args: Prisma.UpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          aggregate: {
            args: Prisma.UpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpdate>
          }
          groupBy: {
            args: Prisma.UpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpdateCountArgs<ExtArgs>
            result: $Utils.Optional<UpdateCountAggregateOutputType> | number
          }
        }
      }
      DonorComment: {
        payload: Prisma.$DonorCommentPayload<ExtArgs>
        fields: Prisma.DonorCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          findFirst: {
            args: Prisma.DonorCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          findMany: {
            args: Prisma.DonorCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>[]
          }
          create: {
            args: Prisma.DonorCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          createMany: {
            args: Prisma.DonorCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>[]
          }
          delete: {
            args: Prisma.DonorCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          update: {
            args: Prisma.DonorCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          deleteMany: {
            args: Prisma.DonorCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>[]
          }
          upsert: {
            args: Prisma.DonorCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorCommentPayload>
          }
          aggregate: {
            args: Prisma.DonorCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonorComment>
          }
          groupBy: {
            args: Prisma.DonorCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCommentCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCommentCountAggregateOutputType> | number
          }
        }
      }
      DonorTransaction: {
        payload: Prisma.$DonorTransactionPayload<ExtArgs>
        fields: Prisma.DonorTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          findFirst: {
            args: Prisma.DonorTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          findMany: {
            args: Prisma.DonorTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>[]
          }
          create: {
            args: Prisma.DonorTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          createMany: {
            args: Prisma.DonorTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>[]
          }
          delete: {
            args: Prisma.DonorTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          update: {
            args: Prisma.DonorTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          deleteMany: {
            args: Prisma.DonorTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>[]
          }
          upsert: {
            args: Prisma.DonorTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorTransactionPayload>
          }
          aggregate: {
            args: Prisma.DonorTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonorTransaction>
          }
          groupBy: {
            args: Prisma.DonorTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<DonorTransactionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    fAQ?: FAQOmit
    update?: UpdateOmit
    donorComment?: DonorCommentOmit
    donorTransaction?: DonorTransactionOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    faqs: number
    updates: number
    donorComments: number
    donorTransactions: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faqs?: boolean | CampaignCountOutputTypeCountFaqsArgs
    updates?: boolean | CampaignCountOutputTypeCountUpdatesArgs
    donorComments?: boolean | CampaignCountOutputTypeCountDonorCommentsArgs
    donorTransactions?: boolean | CampaignCountOutputTypeCountDonorTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountDonorCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorCommentWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountDonorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorTransactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdCampaigns: number
    donorComments: number
    donorTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCampaigns?: boolean | UserCountOutputTypeCountCreatedCampaignsArgs
    donorComments?: boolean | UserCountOutputTypeCountDonorCommentsArgs
    donorTransactions?: boolean | UserCountOutputTypeCountDonorTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonorCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    amountRaised: number | null
    goalAmount: number | null
    donorsCount: number | null
  }

  export type CampaignSumAggregateOutputType = {
    amountRaised: number | null
    goalAmount: number | null
    donorsCount: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    shortDescription: string | null
    image: string | null
    category: string | null
    creatorId: string | null
    creatorName: string | null
    creatorImage: string | null
    creatorBio: string | null
    amountRaised: number | null
    goalAmount: number | null
    donorsCount: number | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    status: $Enums.CampaignStatus | null
    featured: boolean | null
    verified: boolean | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    shortDescription: string | null
    image: string | null
    category: string | null
    creatorId: string | null
    creatorName: string | null
    creatorImage: string | null
    creatorBio: string | null
    amountRaised: number | null
    goalAmount: number | null
    donorsCount: number | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    status: $Enums.CampaignStatus | null
    featured: boolean | null
    verified: boolean | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    title: number
    description: number
    shortDescription: number
    image: number
    category: number
    tags: number
    creatorId: number
    creatorName: number
    creatorImage: number
    creatorBio: number
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: number
    endDate: number
    location: number
    status: number
    featured: number
    verified: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    amountRaised?: true
    goalAmount?: true
    donorsCount?: true
  }

  export type CampaignSumAggregateInputType = {
    amountRaised?: true
    goalAmount?: true
    donorsCount?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    shortDescription?: true
    image?: true
    category?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    creatorBio?: true
    amountRaised?: true
    goalAmount?: true
    donorsCount?: true
    startDate?: true
    endDate?: true
    location?: true
    status?: true
    featured?: true
    verified?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    shortDescription?: true
    image?: true
    category?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    creatorBio?: true
    amountRaised?: true
    goalAmount?: true
    donorsCount?: true
    startDate?: true
    endDate?: true
    location?: true
    status?: true
    featured?: true
    verified?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    shortDescription?: true
    image?: true
    category?: true
    tags?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    creatorBio?: true
    amountRaised?: true
    goalAmount?: true
    donorsCount?: true
    startDate?: true
    endDate?: true
    location?: true
    status?: true
    featured?: true
    verified?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags: string[]
    creatorId: string
    creatorName: string
    creatorImage: string | null
    creatorBio: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date
    endDate: Date
    location: string
    status: $Enums.CampaignStatus
    featured: boolean
    verified: boolean
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    creatorId?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    creatorBio?: boolean
    amountRaised?: boolean
    goalAmount?: boolean
    donorsCount?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    verified?: boolean
    faqs?: boolean | Campaign$faqsArgs<ExtArgs>
    updates?: boolean | Campaign$updatesArgs<ExtArgs>
    donorComments?: boolean | Campaign$donorCommentsArgs<ExtArgs>
    donorTransactions?: boolean | Campaign$donorTransactionsArgs<ExtArgs>
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    creatorId?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    creatorBio?: boolean
    amountRaised?: boolean
    goalAmount?: boolean
    donorsCount?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    verified?: boolean
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    creatorId?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    creatorBio?: boolean
    amountRaised?: boolean
    goalAmount?: boolean
    donorsCount?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    verified?: boolean
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    creatorId?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    creatorBio?: boolean
    amountRaised?: boolean
    goalAmount?: boolean
    donorsCount?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    verified?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "shortDescription" | "image" | "category" | "tags" | "creatorId" | "creatorName" | "creatorImage" | "creatorBio" | "amountRaised" | "goalAmount" | "donorsCount" | "startDate" | "endDate" | "location" | "status" | "featured" | "verified", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faqs?: boolean | Campaign$faqsArgs<ExtArgs>
    updates?: boolean | Campaign$updatesArgs<ExtArgs>
    donorComments?: boolean | Campaign$donorCommentsArgs<ExtArgs>
    donorTransactions?: boolean | Campaign$donorTransactionsArgs<ExtArgs>
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Campaign$creatorArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      faqs: Prisma.$FAQPayload<ExtArgs>[]
      updates: Prisma.$UpdatePayload<ExtArgs>[]
      donorComments: Prisma.$DonorCommentPayload<ExtArgs>[]
      donorTransactions: Prisma.$DonorTransactionPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      shortDescription: string
      image: string
      category: string
      tags: string[]
      creatorId: string
      creatorName: string
      creatorImage: string | null
      creatorBio: string | null
      amountRaised: number
      goalAmount: number
      donorsCount: number
      startDate: Date
      endDate: Date
      location: string
      status: $Enums.CampaignStatus
      featured: boolean
      verified: boolean
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faqs<T extends Campaign$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updates<T extends Campaign$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donorComments<T extends Campaign$donorCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$donorCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donorTransactions<T extends Campaign$donorTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$donorTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends Campaign$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly shortDescription: FieldRef<"Campaign", 'String'>
    readonly image: FieldRef<"Campaign", 'String'>
    readonly category: FieldRef<"Campaign", 'String'>
    readonly tags: FieldRef<"Campaign", 'String[]'>
    readonly creatorId: FieldRef<"Campaign", 'String'>
    readonly creatorName: FieldRef<"Campaign", 'String'>
    readonly creatorImage: FieldRef<"Campaign", 'String'>
    readonly creatorBio: FieldRef<"Campaign", 'String'>
    readonly amountRaised: FieldRef<"Campaign", 'Int'>
    readonly goalAmount: FieldRef<"Campaign", 'Int'>
    readonly donorsCount: FieldRef<"Campaign", 'Int'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly location: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly featured: FieldRef<"Campaign", 'Boolean'>
    readonly verified: FieldRef<"Campaign", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.faqs
   */
  export type Campaign$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    cursor?: FAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * Campaign.updates
   */
  export type Campaign$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    where?: UpdateWhereInput
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    cursor?: UpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Campaign.donorComments
   */
  export type Campaign$donorCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    where?: DonorCommentWhereInput
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    cursor?: DonorCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorCommentScalarFieldEnum | DonorCommentScalarFieldEnum[]
  }

  /**
   * Campaign.donorTransactions
   */
  export type Campaign$donorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    where?: DonorTransactionWhereInput
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    cursor?: DonorTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorTransactionScalarFieldEnum | DonorTransactionScalarFieldEnum[]
  }

  /**
   * Campaign.creator
   */
  export type Campaign$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    campaignId: string | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    campaignId: string | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    campaignId: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    campaignId?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    campaignId?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    campaignId?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question: string
    answer: string
    campaignId: string
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    campaignId?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "campaignId", ExtArgs["result"]["fAQ"]>
  export type FAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type FAQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type FAQIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      campaignId: string
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS and returns the data updated in the database.
     * @param {FAQUpdateManyAndReturnArgs} args - Arguments to update many FAQS.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FAQ model
   */
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answer: FieldRef<"FAQ", 'String'>
    readonly campaignId: FieldRef<"FAQ", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ updateManyAndReturn
   */
  export type FAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
  }


  /**
   * Model Update
   */

  export type AggregateUpdate = {
    _count: UpdateCountAggregateOutputType | null
    _min: UpdateMinAggregateOutputType | null
    _max: UpdateMaxAggregateOutputType | null
  }

  export type UpdateMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
    creatorName: string | null
    creatorImage: string | null
    campaignId: string | null
  }

  export type UpdateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
    creatorName: string | null
    creatorImage: string | null
    campaignId: string | null
  }

  export type UpdateCountAggregateOutputType = {
    id: number
    title: number
    content: number
    date: number
    creatorName: number
    creatorImage: number
    campaignId: number
    _all: number
  }


  export type UpdateMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    creatorName?: true
    creatorImage?: true
    campaignId?: true
  }

  export type UpdateMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    creatorName?: true
    creatorImage?: true
    campaignId?: true
  }

  export type UpdateCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    creatorName?: true
    creatorImage?: true
    campaignId?: true
    _all?: true
  }

  export type UpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Update to aggregate.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Updates
    **/
    _count?: true | UpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpdateMaxAggregateInputType
  }

  export type GetUpdateAggregateType<T extends UpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpdate[P]>
      : GetScalarType<T[P], AggregateUpdate[P]>
  }




  export type UpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateWhereInput
    orderBy?: UpdateOrderByWithAggregationInput | UpdateOrderByWithAggregationInput[]
    by: UpdateScalarFieldEnum[] | UpdateScalarFieldEnum
    having?: UpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpdateCountAggregateInputType | true
    _min?: UpdateMinAggregateInputType
    _max?: UpdateMaxAggregateInputType
  }

  export type UpdateGroupByOutputType = {
    id: string
    title: string
    content: string
    date: Date
    creatorName: string
    creatorImage: string | null
    campaignId: string
    _count: UpdateCountAggregateOutputType | null
    _min: UpdateMinAggregateOutputType | null
    _max: UpdateMaxAggregateOutputType | null
  }

  type GetUpdateGroupByPayload<T extends UpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpdateGroupByOutputType[P]>
            : GetScalarType<T[P], UpdateGroupByOutputType[P]>
        }
      >
    >


  export type UpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    campaignId?: boolean
  }

  export type UpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "date" | "creatorName" | "creatorImage" | "campaignId", ExtArgs["result"]["update"]>
  export type UpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type UpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type UpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $UpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Update"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      date: Date
      creatorName: string
      creatorImage: string | null
      campaignId: string
    }, ExtArgs["result"]["update"]>
    composites: {}
  }

  type UpdateGetPayload<S extends boolean | null | undefined | UpdateDefaultArgs> = $Result.GetResult<Prisma.$UpdatePayload, S>

  type UpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpdateCountAggregateInputType | true
    }

  export interface UpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Update'], meta: { name: 'Update' } }
    /**
     * Find zero or one Update that matches the filter.
     * @param {UpdateFindUniqueArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpdateFindUniqueArgs>(args: SelectSubset<T, UpdateFindUniqueArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Update that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpdateFindUniqueOrThrowArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, UpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Update that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindFirstArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpdateFindFirstArgs>(args?: SelectSubset<T, UpdateFindFirstArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Update that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindFirstOrThrowArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, UpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Updates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Updates
     * const updates = await prisma.update.findMany()
     * 
     * // Get first 10 Updates
     * const updates = await prisma.update.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const updateWithIdOnly = await prisma.update.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpdateFindManyArgs>(args?: SelectSubset<T, UpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Update.
     * @param {UpdateCreateArgs} args - Arguments to create a Update.
     * @example
     * // Create one Update
     * const Update = await prisma.update.create({
     *   data: {
     *     // ... data to create a Update
     *   }
     * })
     * 
     */
    create<T extends UpdateCreateArgs>(args: SelectSubset<T, UpdateCreateArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Updates.
     * @param {UpdateCreateManyArgs} args - Arguments to create many Updates.
     * @example
     * // Create many Updates
     * const update = await prisma.update.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpdateCreateManyArgs>(args?: SelectSubset<T, UpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Updates and returns the data saved in the database.
     * @param {UpdateCreateManyAndReturnArgs} args - Arguments to create many Updates.
     * @example
     * // Create many Updates
     * const update = await prisma.update.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Updates and only return the `id`
     * const updateWithIdOnly = await prisma.update.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, UpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Update.
     * @param {UpdateDeleteArgs} args - Arguments to delete one Update.
     * @example
     * // Delete one Update
     * const Update = await prisma.update.delete({
     *   where: {
     *     // ... filter to delete one Update
     *   }
     * })
     * 
     */
    delete<T extends UpdateDeleteArgs>(args: SelectSubset<T, UpdateDeleteArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Update.
     * @param {UpdateUpdateArgs} args - Arguments to update one Update.
     * @example
     * // Update one Update
     * const update = await prisma.update.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpdateUpdateArgs>(args: SelectSubset<T, UpdateUpdateArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Updates.
     * @param {UpdateDeleteManyArgs} args - Arguments to filter Updates to delete.
     * @example
     * // Delete a few Updates
     * const { count } = await prisma.update.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpdateDeleteManyArgs>(args?: SelectSubset<T, UpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Updates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Updates
     * const update = await prisma.update.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpdateUpdateManyArgs>(args: SelectSubset<T, UpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Updates and returns the data updated in the database.
     * @param {UpdateUpdateManyAndReturnArgs} args - Arguments to update many Updates.
     * @example
     * // Update many Updates
     * const update = await prisma.update.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Updates and only return the `id`
     * const updateWithIdOnly = await prisma.update.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, UpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Update.
     * @param {UpdateUpsertArgs} args - Arguments to update or create a Update.
     * @example
     * // Update or create a Update
     * const update = await prisma.update.upsert({
     *   create: {
     *     // ... data to create a Update
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Update we want to update
     *   }
     * })
     */
    upsert<T extends UpdateUpsertArgs>(args: SelectSubset<T, UpdateUpsertArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Updates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateCountArgs} args - Arguments to filter Updates to count.
     * @example
     * // Count the number of Updates
     * const count = await prisma.update.count({
     *   where: {
     *     // ... the filter for the Updates we want to count
     *   }
     * })
    **/
    count<T extends UpdateCountArgs>(
      args?: Subset<T, UpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Update.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpdateAggregateArgs>(args: Subset<T, UpdateAggregateArgs>): Prisma.PrismaPromise<GetUpdateAggregateType<T>>

    /**
     * Group by Update.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpdateGroupByArgs['orderBy'] }
        : { orderBy?: UpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Update model
   */
  readonly fields: UpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Update.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Update model
   */
  interface UpdateFieldRefs {
    readonly id: FieldRef<"Update", 'String'>
    readonly title: FieldRef<"Update", 'String'>
    readonly content: FieldRef<"Update", 'String'>
    readonly date: FieldRef<"Update", 'DateTime'>
    readonly creatorName: FieldRef<"Update", 'String'>
    readonly creatorImage: FieldRef<"Update", 'String'>
    readonly campaignId: FieldRef<"Update", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Update findUnique
   */
  export type UpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update findUniqueOrThrow
   */
  export type UpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update findFirst
   */
  export type UpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Updates.
     */
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update findFirstOrThrow
   */
  export type UpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Updates.
     */
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update findMany
   */
  export type UpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Updates to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update create
   */
  export type UpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a Update.
     */
    data: XOR<UpdateCreateInput, UpdateUncheckedCreateInput>
  }

  /**
   * Update createMany
   */
  export type UpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Updates.
     */
    data: UpdateCreateManyInput | UpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Update createManyAndReturn
   */
  export type UpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * The data used to create many Updates.
     */
    data: UpdateCreateManyInput | UpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Update update
   */
  export type UpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a Update.
     */
    data: XOR<UpdateUpdateInput, UpdateUncheckedUpdateInput>
    /**
     * Choose, which Update to update.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update updateMany
   */
  export type UpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Updates.
     */
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyInput>
    /**
     * Filter which Updates to update
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to update.
     */
    limit?: number
  }

  /**
   * Update updateManyAndReturn
   */
  export type UpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * The data used to update Updates.
     */
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyInput>
    /**
     * Filter which Updates to update
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Update upsert
   */
  export type UpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the Update to update in case it exists.
     */
    where: UpdateWhereUniqueInput
    /**
     * In case the Update found by the `where` argument doesn't exist, create a new Update with this data.
     */
    create: XOR<UpdateCreateInput, UpdateUncheckedCreateInput>
    /**
     * In case the Update was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpdateUpdateInput, UpdateUncheckedUpdateInput>
  }

  /**
   * Update delete
   */
  export type UpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter which Update to delete.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update deleteMany
   */
  export type UpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Updates to delete
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to delete.
     */
    limit?: number
  }

  /**
   * Update without action
   */
  export type UpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
  }


  /**
   * Model DonorComment
   */

  export type AggregateDonorComment = {
    _count: DonorCommentCountAggregateOutputType | null
    _min: DonorCommentMinAggregateOutputType | null
    _max: DonorCommentMaxAggregateOutputType | null
  }

  export type DonorCommentMinAggregateOutputType = {
    id: string | null
    isAnonymous: boolean | null
    content: string | null
    userName: string | null
    userImage: string | null
    date: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type DonorCommentMaxAggregateOutputType = {
    id: string | null
    isAnonymous: boolean | null
    content: string | null
    userName: string | null
    userImage: string | null
    date: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type DonorCommentCountAggregateOutputType = {
    id: number
    isAnonymous: number
    content: number
    userName: number
    userImage: number
    date: number
    campaignId: number
    userId: number
    _all: number
  }


  export type DonorCommentMinAggregateInputType = {
    id?: true
    isAnonymous?: true
    content?: true
    userName?: true
    userImage?: true
    date?: true
    campaignId?: true
    userId?: true
  }

  export type DonorCommentMaxAggregateInputType = {
    id?: true
    isAnonymous?: true
    content?: true
    userName?: true
    userImage?: true
    date?: true
    campaignId?: true
    userId?: true
  }

  export type DonorCommentCountAggregateInputType = {
    id?: true
    isAnonymous?: true
    content?: true
    userName?: true
    userImage?: true
    date?: true
    campaignId?: true
    userId?: true
    _all?: true
  }

  export type DonorCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorComment to aggregate.
     */
    where?: DonorCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorComments to fetch.
     */
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonorComments
    **/
    _count?: true | DonorCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorCommentMaxAggregateInputType
  }

  export type GetDonorCommentAggregateType<T extends DonorCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateDonorComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonorComment[P]>
      : GetScalarType<T[P], AggregateDonorComment[P]>
  }




  export type DonorCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorCommentWhereInput
    orderBy?: DonorCommentOrderByWithAggregationInput | DonorCommentOrderByWithAggregationInput[]
    by: DonorCommentScalarFieldEnum[] | DonorCommentScalarFieldEnum
    having?: DonorCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCommentCountAggregateInputType | true
    _min?: DonorCommentMinAggregateInputType
    _max?: DonorCommentMaxAggregateInputType
  }

  export type DonorCommentGroupByOutputType = {
    id: string
    isAnonymous: boolean | null
    content: string | null
    userName: string
    userImage: string | null
    date: Date
    campaignId: string
    userId: string | null
    _count: DonorCommentCountAggregateOutputType | null
    _min: DonorCommentMinAggregateOutputType | null
    _max: DonorCommentMaxAggregateOutputType | null
  }

  type GetDonorCommentGroupByPayload<T extends DonorCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorCommentGroupByOutputType[P]>
            : GetScalarType<T[P], DonorCommentGroupByOutputType[P]>
        }
      >
    >


  export type DonorCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAnonymous?: boolean
    content?: boolean
    userName?: boolean
    userImage?: boolean
    date?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorComment"]>

  export type DonorCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAnonymous?: boolean
    content?: boolean
    userName?: boolean
    userImage?: boolean
    date?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorComment"]>

  export type DonorCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAnonymous?: boolean
    content?: boolean
    userName?: boolean
    userImage?: boolean
    date?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorComment"]>

  export type DonorCommentSelectScalar = {
    id?: boolean
    isAnonymous?: boolean
    content?: boolean
    userName?: boolean
    userImage?: boolean
    date?: boolean
    campaignId?: boolean
    userId?: boolean
  }

  export type DonorCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isAnonymous" | "content" | "userName" | "userImage" | "date" | "campaignId" | "userId", ExtArgs["result"]["donorComment"]>
  export type DonorCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }
  export type DonorCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }
  export type DonorCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorComment$userArgs<ExtArgs>
  }

  export type $DonorCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonorComment"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isAnonymous: boolean | null
      content: string | null
      userName: string
      userImage: string | null
      date: Date
      campaignId: string
      userId: string | null
    }, ExtArgs["result"]["donorComment"]>
    composites: {}
  }

  type DonorCommentGetPayload<S extends boolean | null | undefined | DonorCommentDefaultArgs> = $Result.GetResult<Prisma.$DonorCommentPayload, S>

  type DonorCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCommentCountAggregateInputType | true
    }

  export interface DonorCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonorComment'], meta: { name: 'DonorComment' } }
    /**
     * Find zero or one DonorComment that matches the filter.
     * @param {DonorCommentFindUniqueArgs} args - Arguments to find a DonorComment
     * @example
     * // Get one DonorComment
     * const donorComment = await prisma.donorComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorCommentFindUniqueArgs>(args: SelectSubset<T, DonorCommentFindUniqueArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonorComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorCommentFindUniqueOrThrowArgs} args - Arguments to find a DonorComment
     * @example
     * // Get one DonorComment
     * const donorComment = await prisma.donorComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentFindFirstArgs} args - Arguments to find a DonorComment
     * @example
     * // Get one DonorComment
     * const donorComment = await prisma.donorComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorCommentFindFirstArgs>(args?: SelectSubset<T, DonorCommentFindFirstArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentFindFirstOrThrowArgs} args - Arguments to find a DonorComment
     * @example
     * // Get one DonorComment
     * const donorComment = await prisma.donorComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonorComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonorComments
     * const donorComments = await prisma.donorComment.findMany()
     * 
     * // Get first 10 DonorComments
     * const donorComments = await prisma.donorComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorCommentWithIdOnly = await prisma.donorComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorCommentFindManyArgs>(args?: SelectSubset<T, DonorCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonorComment.
     * @param {DonorCommentCreateArgs} args - Arguments to create a DonorComment.
     * @example
     * // Create one DonorComment
     * const DonorComment = await prisma.donorComment.create({
     *   data: {
     *     // ... data to create a DonorComment
     *   }
     * })
     * 
     */
    create<T extends DonorCommentCreateArgs>(args: SelectSubset<T, DonorCommentCreateArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonorComments.
     * @param {DonorCommentCreateManyArgs} args - Arguments to create many DonorComments.
     * @example
     * // Create many DonorComments
     * const donorComment = await prisma.donorComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCommentCreateManyArgs>(args?: SelectSubset<T, DonorCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonorComments and returns the data saved in the database.
     * @param {DonorCommentCreateManyAndReturnArgs} args - Arguments to create many DonorComments.
     * @example
     * // Create many DonorComments
     * const donorComment = await prisma.donorComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonorComments and only return the `id`
     * const donorCommentWithIdOnly = await prisma.donorComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonorComment.
     * @param {DonorCommentDeleteArgs} args - Arguments to delete one DonorComment.
     * @example
     * // Delete one DonorComment
     * const DonorComment = await prisma.donorComment.delete({
     *   where: {
     *     // ... filter to delete one DonorComment
     *   }
     * })
     * 
     */
    delete<T extends DonorCommentDeleteArgs>(args: SelectSubset<T, DonorCommentDeleteArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonorComment.
     * @param {DonorCommentUpdateArgs} args - Arguments to update one DonorComment.
     * @example
     * // Update one DonorComment
     * const donorComment = await prisma.donorComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorCommentUpdateArgs>(args: SelectSubset<T, DonorCommentUpdateArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonorComments.
     * @param {DonorCommentDeleteManyArgs} args - Arguments to filter DonorComments to delete.
     * @example
     * // Delete a few DonorComments
     * const { count } = await prisma.donorComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorCommentDeleteManyArgs>(args?: SelectSubset<T, DonorCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonorComments
     * const donorComment = await prisma.donorComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorCommentUpdateManyArgs>(args: SelectSubset<T, DonorCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorComments and returns the data updated in the database.
     * @param {DonorCommentUpdateManyAndReturnArgs} args - Arguments to update many DonorComments.
     * @example
     * // Update many DonorComments
     * const donorComment = await prisma.donorComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonorComments and only return the `id`
     * const donorCommentWithIdOnly = await prisma.donorComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonorComment.
     * @param {DonorCommentUpsertArgs} args - Arguments to update or create a DonorComment.
     * @example
     * // Update or create a DonorComment
     * const donorComment = await prisma.donorComment.upsert({
     *   create: {
     *     // ... data to create a DonorComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonorComment we want to update
     *   }
     * })
     */
    upsert<T extends DonorCommentUpsertArgs>(args: SelectSubset<T, DonorCommentUpsertArgs<ExtArgs>>): Prisma__DonorCommentClient<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonorComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentCountArgs} args - Arguments to filter DonorComments to count.
     * @example
     * // Count the number of DonorComments
     * const count = await prisma.donorComment.count({
     *   where: {
     *     // ... the filter for the DonorComments we want to count
     *   }
     * })
    **/
    count<T extends DonorCommentCountArgs>(
      args?: Subset<T, DonorCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonorComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorCommentAggregateArgs>(args: Subset<T, DonorCommentAggregateArgs>): Prisma.PrismaPromise<GetDonorCommentAggregateType<T>>

    /**
     * Group by DonorComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorCommentGroupByArgs['orderBy'] }
        : { orderBy?: DonorCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonorComment model
   */
  readonly fields: DonorCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonorComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends DonorComment$userArgs<ExtArgs> = {}>(args?: Subset<T, DonorComment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonorComment model
   */
  interface DonorCommentFieldRefs {
    readonly id: FieldRef<"DonorComment", 'String'>
    readonly isAnonymous: FieldRef<"DonorComment", 'Boolean'>
    readonly content: FieldRef<"DonorComment", 'String'>
    readonly userName: FieldRef<"DonorComment", 'String'>
    readonly userImage: FieldRef<"DonorComment", 'String'>
    readonly date: FieldRef<"DonorComment", 'DateTime'>
    readonly campaignId: FieldRef<"DonorComment", 'String'>
    readonly userId: FieldRef<"DonorComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonorComment findUnique
   */
  export type DonorCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter, which DonorComment to fetch.
     */
    where: DonorCommentWhereUniqueInput
  }

  /**
   * DonorComment findUniqueOrThrow
   */
  export type DonorCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter, which DonorComment to fetch.
     */
    where: DonorCommentWhereUniqueInput
  }

  /**
   * DonorComment findFirst
   */
  export type DonorCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter, which DonorComment to fetch.
     */
    where?: DonorCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorComments to fetch.
     */
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorComments.
     */
    cursor?: DonorCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorComments.
     */
    distinct?: DonorCommentScalarFieldEnum | DonorCommentScalarFieldEnum[]
  }

  /**
   * DonorComment findFirstOrThrow
   */
  export type DonorCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter, which DonorComment to fetch.
     */
    where?: DonorCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorComments to fetch.
     */
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorComments.
     */
    cursor?: DonorCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorComments.
     */
    distinct?: DonorCommentScalarFieldEnum | DonorCommentScalarFieldEnum[]
  }

  /**
   * DonorComment findMany
   */
  export type DonorCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter, which DonorComments to fetch.
     */
    where?: DonorCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorComments to fetch.
     */
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonorComments.
     */
    cursor?: DonorCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorComments.
     */
    skip?: number
    distinct?: DonorCommentScalarFieldEnum | DonorCommentScalarFieldEnum[]
  }

  /**
   * DonorComment create
   */
  export type DonorCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a DonorComment.
     */
    data: XOR<DonorCommentCreateInput, DonorCommentUncheckedCreateInput>
  }

  /**
   * DonorComment createMany
   */
  export type DonorCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonorComments.
     */
    data: DonorCommentCreateManyInput | DonorCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonorComment createManyAndReturn
   */
  export type DonorCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * The data used to create many DonorComments.
     */
    data: DonorCommentCreateManyInput | DonorCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorComment update
   */
  export type DonorCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a DonorComment.
     */
    data: XOR<DonorCommentUpdateInput, DonorCommentUncheckedUpdateInput>
    /**
     * Choose, which DonorComment to update.
     */
    where: DonorCommentWhereUniqueInput
  }

  /**
   * DonorComment updateMany
   */
  export type DonorCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonorComments.
     */
    data: XOR<DonorCommentUpdateManyMutationInput, DonorCommentUncheckedUpdateManyInput>
    /**
     * Filter which DonorComments to update
     */
    where?: DonorCommentWhereInput
    /**
     * Limit how many DonorComments to update.
     */
    limit?: number
  }

  /**
   * DonorComment updateManyAndReturn
   */
  export type DonorCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * The data used to update DonorComments.
     */
    data: XOR<DonorCommentUpdateManyMutationInput, DonorCommentUncheckedUpdateManyInput>
    /**
     * Filter which DonorComments to update
     */
    where?: DonorCommentWhereInput
    /**
     * Limit how many DonorComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorComment upsert
   */
  export type DonorCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the DonorComment to update in case it exists.
     */
    where: DonorCommentWhereUniqueInput
    /**
     * In case the DonorComment found by the `where` argument doesn't exist, create a new DonorComment with this data.
     */
    create: XOR<DonorCommentCreateInput, DonorCommentUncheckedCreateInput>
    /**
     * In case the DonorComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorCommentUpdateInput, DonorCommentUncheckedUpdateInput>
  }

  /**
   * DonorComment delete
   */
  export type DonorCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    /**
     * Filter which DonorComment to delete.
     */
    where: DonorCommentWhereUniqueInput
  }

  /**
   * DonorComment deleteMany
   */
  export type DonorCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorComments to delete
     */
    where?: DonorCommentWhereInput
    /**
     * Limit how many DonorComments to delete.
     */
    limit?: number
  }

  /**
   * DonorComment.user
   */
  export type DonorComment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DonorComment without action
   */
  export type DonorCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
  }


  /**
   * Model DonorTransaction
   */

  export type AggregateDonorTransaction = {
    _count: DonorTransactionCountAggregateOutputType | null
    _avg: DonorTransactionAvgAggregateOutputType | null
    _sum: DonorTransactionSumAggregateOutputType | null
    _min: DonorTransactionMinAggregateOutputType | null
    _max: DonorTransactionMaxAggregateOutputType | null
  }

  export type DonorTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type DonorTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type DonorTransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    paymentMethod: string | null
    isAnonymous: boolean | null
    message: string | null
    donorName: string | null
    campaignId: string | null
    userId: string | null
  }

  export type DonorTransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    paymentMethod: string | null
    isAnonymous: boolean | null
    message: string | null
    donorName: string | null
    campaignId: string | null
    userId: string | null
  }

  export type DonorTransactionCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    paymentMethod: number
    isAnonymous: number
    message: number
    donorName: number
    campaignId: number
    userId: number
    _all: number
  }


  export type DonorTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type DonorTransactionSumAggregateInputType = {
    amount?: true
  }

  export type DonorTransactionMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    paymentMethod?: true
    isAnonymous?: true
    message?: true
    donorName?: true
    campaignId?: true
    userId?: true
  }

  export type DonorTransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    paymentMethod?: true
    isAnonymous?: true
    message?: true
    donorName?: true
    campaignId?: true
    userId?: true
  }

  export type DonorTransactionCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    paymentMethod?: true
    isAnonymous?: true
    message?: true
    donorName?: true
    campaignId?: true
    userId?: true
    _all?: true
  }

  export type DonorTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorTransaction to aggregate.
     */
    where?: DonorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorTransactions to fetch.
     */
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonorTransactions
    **/
    _count?: true | DonorTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonorTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonorTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorTransactionMaxAggregateInputType
  }

  export type GetDonorTransactionAggregateType<T extends DonorTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateDonorTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonorTransaction[P]>
      : GetScalarType<T[P], AggregateDonorTransaction[P]>
  }




  export type DonorTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorTransactionWhereInput
    orderBy?: DonorTransactionOrderByWithAggregationInput | DonorTransactionOrderByWithAggregationInput[]
    by: DonorTransactionScalarFieldEnum[] | DonorTransactionScalarFieldEnum
    having?: DonorTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorTransactionCountAggregateInputType | true
    _avg?: DonorTransactionAvgAggregateInputType
    _sum?: DonorTransactionSumAggregateInputType
    _min?: DonorTransactionMinAggregateInputType
    _max?: DonorTransactionMaxAggregateInputType
  }

  export type DonorTransactionGroupByOutputType = {
    id: string
    amount: number
    date: Date
    paymentMethod: string
    isAnonymous: boolean
    message: string | null
    donorName: string | null
    campaignId: string
    userId: string | null
    _count: DonorTransactionCountAggregateOutputType | null
    _avg: DonorTransactionAvgAggregateOutputType | null
    _sum: DonorTransactionSumAggregateOutputType | null
    _min: DonorTransactionMinAggregateOutputType | null
    _max: DonorTransactionMaxAggregateOutputType | null
  }

  type GetDonorTransactionGroupByPayload<T extends DonorTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], DonorTransactionGroupByOutputType[P]>
        }
      >
    >


  export type DonorTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    paymentMethod?: boolean
    isAnonymous?: boolean
    message?: boolean
    donorName?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorTransaction"]>

  export type DonorTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    paymentMethod?: boolean
    isAnonymous?: boolean
    message?: boolean
    donorName?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorTransaction"]>

  export type DonorTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    paymentMethod?: boolean
    isAnonymous?: boolean
    message?: boolean
    donorName?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["donorTransaction"]>

  export type DonorTransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    paymentMethod?: boolean
    isAnonymous?: boolean
    message?: boolean
    donorName?: boolean
    campaignId?: boolean
    userId?: boolean
  }

  export type DonorTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "paymentMethod" | "isAnonymous" | "message" | "donorName" | "campaignId" | "userId", ExtArgs["result"]["donorTransaction"]>
  export type DonorTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }
  export type DonorTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }
  export type DonorTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | DonorTransaction$userArgs<ExtArgs>
  }

  export type $DonorTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonorTransaction"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      paymentMethod: string
      isAnonymous: boolean
      message: string | null
      donorName: string | null
      campaignId: string
      userId: string | null
    }, ExtArgs["result"]["donorTransaction"]>
    composites: {}
  }

  type DonorTransactionGetPayload<S extends boolean | null | undefined | DonorTransactionDefaultArgs> = $Result.GetResult<Prisma.$DonorTransactionPayload, S>

  type DonorTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorTransactionCountAggregateInputType | true
    }

  export interface DonorTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonorTransaction'], meta: { name: 'DonorTransaction' } }
    /**
     * Find zero or one DonorTransaction that matches the filter.
     * @param {DonorTransactionFindUniqueArgs} args - Arguments to find a DonorTransaction
     * @example
     * // Get one DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorTransactionFindUniqueArgs>(args: SelectSubset<T, DonorTransactionFindUniqueArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonorTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorTransactionFindUniqueOrThrowArgs} args - Arguments to find a DonorTransaction
     * @example
     * // Get one DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionFindFirstArgs} args - Arguments to find a DonorTransaction
     * @example
     * // Get one DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorTransactionFindFirstArgs>(args?: SelectSubset<T, DonorTransactionFindFirstArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionFindFirstOrThrowArgs} args - Arguments to find a DonorTransaction
     * @example
     * // Get one DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonorTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonorTransactions
     * const donorTransactions = await prisma.donorTransaction.findMany()
     * 
     * // Get first 10 DonorTransactions
     * const donorTransactions = await prisma.donorTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorTransactionWithIdOnly = await prisma.donorTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorTransactionFindManyArgs>(args?: SelectSubset<T, DonorTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonorTransaction.
     * @param {DonorTransactionCreateArgs} args - Arguments to create a DonorTransaction.
     * @example
     * // Create one DonorTransaction
     * const DonorTransaction = await prisma.donorTransaction.create({
     *   data: {
     *     // ... data to create a DonorTransaction
     *   }
     * })
     * 
     */
    create<T extends DonorTransactionCreateArgs>(args: SelectSubset<T, DonorTransactionCreateArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonorTransactions.
     * @param {DonorTransactionCreateManyArgs} args - Arguments to create many DonorTransactions.
     * @example
     * // Create many DonorTransactions
     * const donorTransaction = await prisma.donorTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorTransactionCreateManyArgs>(args?: SelectSubset<T, DonorTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonorTransactions and returns the data saved in the database.
     * @param {DonorTransactionCreateManyAndReturnArgs} args - Arguments to create many DonorTransactions.
     * @example
     * // Create many DonorTransactions
     * const donorTransaction = await prisma.donorTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonorTransactions and only return the `id`
     * const donorTransactionWithIdOnly = await prisma.donorTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonorTransaction.
     * @param {DonorTransactionDeleteArgs} args - Arguments to delete one DonorTransaction.
     * @example
     * // Delete one DonorTransaction
     * const DonorTransaction = await prisma.donorTransaction.delete({
     *   where: {
     *     // ... filter to delete one DonorTransaction
     *   }
     * })
     * 
     */
    delete<T extends DonorTransactionDeleteArgs>(args: SelectSubset<T, DonorTransactionDeleteArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonorTransaction.
     * @param {DonorTransactionUpdateArgs} args - Arguments to update one DonorTransaction.
     * @example
     * // Update one DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorTransactionUpdateArgs>(args: SelectSubset<T, DonorTransactionUpdateArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonorTransactions.
     * @param {DonorTransactionDeleteManyArgs} args - Arguments to filter DonorTransactions to delete.
     * @example
     * // Delete a few DonorTransactions
     * const { count } = await prisma.donorTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorTransactionDeleteManyArgs>(args?: SelectSubset<T, DonorTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonorTransactions
     * const donorTransaction = await prisma.donorTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorTransactionUpdateManyArgs>(args: SelectSubset<T, DonorTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorTransactions and returns the data updated in the database.
     * @param {DonorTransactionUpdateManyAndReturnArgs} args - Arguments to update many DonorTransactions.
     * @example
     * // Update many DonorTransactions
     * const donorTransaction = await prisma.donorTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonorTransactions and only return the `id`
     * const donorTransactionWithIdOnly = await prisma.donorTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonorTransaction.
     * @param {DonorTransactionUpsertArgs} args - Arguments to update or create a DonorTransaction.
     * @example
     * // Update or create a DonorTransaction
     * const donorTransaction = await prisma.donorTransaction.upsert({
     *   create: {
     *     // ... data to create a DonorTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonorTransaction we want to update
     *   }
     * })
     */
    upsert<T extends DonorTransactionUpsertArgs>(args: SelectSubset<T, DonorTransactionUpsertArgs<ExtArgs>>): Prisma__DonorTransactionClient<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonorTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionCountArgs} args - Arguments to filter DonorTransactions to count.
     * @example
     * // Count the number of DonorTransactions
     * const count = await prisma.donorTransaction.count({
     *   where: {
     *     // ... the filter for the DonorTransactions we want to count
     *   }
     * })
    **/
    count<T extends DonorTransactionCountArgs>(
      args?: Subset<T, DonorTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonorTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorTransactionAggregateArgs>(args: Subset<T, DonorTransactionAggregateArgs>): Prisma.PrismaPromise<GetDonorTransactionAggregateType<T>>

    /**
     * Group by DonorTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorTransactionGroupByArgs['orderBy'] }
        : { orderBy?: DonorTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonorTransaction model
   */
  readonly fields: DonorTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonorTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends DonorTransaction$userArgs<ExtArgs> = {}>(args?: Subset<T, DonorTransaction$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonorTransaction model
   */
  interface DonorTransactionFieldRefs {
    readonly id: FieldRef<"DonorTransaction", 'String'>
    readonly amount: FieldRef<"DonorTransaction", 'Int'>
    readonly date: FieldRef<"DonorTransaction", 'DateTime'>
    readonly paymentMethod: FieldRef<"DonorTransaction", 'String'>
    readonly isAnonymous: FieldRef<"DonorTransaction", 'Boolean'>
    readonly message: FieldRef<"DonorTransaction", 'String'>
    readonly donorName: FieldRef<"DonorTransaction", 'String'>
    readonly campaignId: FieldRef<"DonorTransaction", 'String'>
    readonly userId: FieldRef<"DonorTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonorTransaction findUnique
   */
  export type DonorTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DonorTransaction to fetch.
     */
    where: DonorTransactionWhereUniqueInput
  }

  /**
   * DonorTransaction findUniqueOrThrow
   */
  export type DonorTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DonorTransaction to fetch.
     */
    where: DonorTransactionWhereUniqueInput
  }

  /**
   * DonorTransaction findFirst
   */
  export type DonorTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DonorTransaction to fetch.
     */
    where?: DonorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorTransactions to fetch.
     */
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorTransactions.
     */
    cursor?: DonorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorTransactions.
     */
    distinct?: DonorTransactionScalarFieldEnum | DonorTransactionScalarFieldEnum[]
  }

  /**
   * DonorTransaction findFirstOrThrow
   */
  export type DonorTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DonorTransaction to fetch.
     */
    where?: DonorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorTransactions to fetch.
     */
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorTransactions.
     */
    cursor?: DonorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorTransactions.
     */
    distinct?: DonorTransactionScalarFieldEnum | DonorTransactionScalarFieldEnum[]
  }

  /**
   * DonorTransaction findMany
   */
  export type DonorTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DonorTransactions to fetch.
     */
    where?: DonorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorTransactions to fetch.
     */
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonorTransactions.
     */
    cursor?: DonorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorTransactions.
     */
    skip?: number
    distinct?: DonorTransactionScalarFieldEnum | DonorTransactionScalarFieldEnum[]
  }

  /**
   * DonorTransaction create
   */
  export type DonorTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a DonorTransaction.
     */
    data: XOR<DonorTransactionCreateInput, DonorTransactionUncheckedCreateInput>
  }

  /**
   * DonorTransaction createMany
   */
  export type DonorTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonorTransactions.
     */
    data: DonorTransactionCreateManyInput | DonorTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonorTransaction createManyAndReturn
   */
  export type DonorTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many DonorTransactions.
     */
    data: DonorTransactionCreateManyInput | DonorTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorTransaction update
   */
  export type DonorTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a DonorTransaction.
     */
    data: XOR<DonorTransactionUpdateInput, DonorTransactionUncheckedUpdateInput>
    /**
     * Choose, which DonorTransaction to update.
     */
    where: DonorTransactionWhereUniqueInput
  }

  /**
   * DonorTransaction updateMany
   */
  export type DonorTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonorTransactions.
     */
    data: XOR<DonorTransactionUpdateManyMutationInput, DonorTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DonorTransactions to update
     */
    where?: DonorTransactionWhereInput
    /**
     * Limit how many DonorTransactions to update.
     */
    limit?: number
  }

  /**
   * DonorTransaction updateManyAndReturn
   */
  export type DonorTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * The data used to update DonorTransactions.
     */
    data: XOR<DonorTransactionUpdateManyMutationInput, DonorTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DonorTransactions to update
     */
    where?: DonorTransactionWhereInput
    /**
     * Limit how many DonorTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorTransaction upsert
   */
  export type DonorTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the DonorTransaction to update in case it exists.
     */
    where: DonorTransactionWhereUniqueInput
    /**
     * In case the DonorTransaction found by the `where` argument doesn't exist, create a new DonorTransaction with this data.
     */
    create: XOR<DonorTransactionCreateInput, DonorTransactionUncheckedCreateInput>
    /**
     * In case the DonorTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorTransactionUpdateInput, DonorTransactionUncheckedUpdateInput>
  }

  /**
   * DonorTransaction delete
   */
  export type DonorTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    /**
     * Filter which DonorTransaction to delete.
     */
    where: DonorTransactionWhereUniqueInput
  }

  /**
   * DonorTransaction deleteMany
   */
  export type DonorTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorTransactions to delete
     */
    where?: DonorTransactionWhereInput
    /**
     * Limit how many DonorTransactions to delete.
     */
    limit?: number
  }

  /**
   * DonorTransaction.user
   */
  export type DonorTransaction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DonorTransaction without action
   */
  export type DonorTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    image: string | null
    bio: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    image: string | null
    bio: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    image: number
    bio: number
    password: number
    role: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    bio?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    bio?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    bio?: true
    password?: true
    role?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    image: string | null
    bio: string | null
    password: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    bio?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdCampaigns?: boolean | User$createdCampaignsArgs<ExtArgs>
    donorComments?: boolean | User$donorCommentsArgs<ExtArgs>
    donorTransactions?: boolean | User$donorTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    bio?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    bio?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    bio?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "image" | "bio" | "password" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCampaigns?: boolean | User$createdCampaignsArgs<ExtArgs>
    donorComments?: boolean | User$donorCommentsArgs<ExtArgs>
    donorTransactions?: boolean | User$donorTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdCampaigns: Prisma.$CampaignPayload<ExtArgs>[]
      donorComments: Prisma.$DonorCommentPayload<ExtArgs>[]
      donorTransactions: Prisma.$DonorTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      image: string | null
      bio: string | null
      password: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdCampaigns<T extends User$createdCampaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCampaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donorComments<T extends User$donorCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$donorCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donorTransactions<T extends User$donorTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$donorTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdCampaigns
   */
  export type User$createdCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.donorComments
   */
  export type User$donorCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorComment
     */
    select?: DonorCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorComment
     */
    omit?: DonorCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorCommentInclude<ExtArgs> | null
    where?: DonorCommentWhereInput
    orderBy?: DonorCommentOrderByWithRelationInput | DonorCommentOrderByWithRelationInput[]
    cursor?: DonorCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorCommentScalarFieldEnum | DonorCommentScalarFieldEnum[]
  }

  /**
   * User.donorTransactions
   */
  export type User$donorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorTransaction
     */
    select?: DonorTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorTransaction
     */
    omit?: DonorTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorTransactionInclude<ExtArgs> | null
    where?: DonorTransactionWhereInput
    orderBy?: DonorTransactionOrderByWithRelationInput | DonorTransactionOrderByWithRelationInput[]
    cursor?: DonorTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorTransactionScalarFieldEnum | DonorTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    shortDescription: 'shortDescription',
    image: 'image',
    category: 'category',
    tags: 'tags',
    creatorId: 'creatorId',
    creatorName: 'creatorName',
    creatorImage: 'creatorImage',
    creatorBio: 'creatorBio',
    amountRaised: 'amountRaised',
    goalAmount: 'goalAmount',
    donorsCount: 'donorsCount',
    startDate: 'startDate',
    endDate: 'endDate',
    location: 'location',
    status: 'status',
    featured: 'featured',
    verified: 'verified'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    campaignId: 'campaignId'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const UpdateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    date: 'date',
    creatorName: 'creatorName',
    creatorImage: 'creatorImage',
    campaignId: 'campaignId'
  };

  export type UpdateScalarFieldEnum = (typeof UpdateScalarFieldEnum)[keyof typeof UpdateScalarFieldEnum]


  export const DonorCommentScalarFieldEnum: {
    id: 'id',
    isAnonymous: 'isAnonymous',
    content: 'content',
    userName: 'userName',
    userImage: 'userImage',
    date: 'date',
    campaignId: 'campaignId',
    userId: 'userId'
  };

  export type DonorCommentScalarFieldEnum = (typeof DonorCommentScalarFieldEnum)[keyof typeof DonorCommentScalarFieldEnum]


  export const DonorTransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    paymentMethod: 'paymentMethod',
    isAnonymous: 'isAnonymous',
    message: 'message',
    donorName: 'donorName',
    campaignId: 'campaignId',
    userId: 'userId'
  };

  export type DonorTransactionScalarFieldEnum = (typeof DonorTransactionScalarFieldEnum)[keyof typeof DonorTransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    image: 'image',
    bio: 'bio',
    password: 'password',
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    shortDescription?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    tags?: StringNullableListFilter<"Campaign">
    creatorId?: StringFilter<"Campaign"> | string
    creatorName?: StringFilter<"Campaign"> | string
    creatorImage?: StringNullableFilter<"Campaign"> | string | null
    creatorBio?: StringNullableFilter<"Campaign"> | string | null
    amountRaised?: IntFilter<"Campaign"> | number
    goalAmount?: IntFilter<"Campaign"> | number
    donorsCount?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    location?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    featured?: BoolFilter<"Campaign"> | boolean
    verified?: BoolFilter<"Campaign"> | boolean
    faqs?: FAQListRelationFilter
    updates?: UpdateListRelationFilter
    donorComments?: DonorCommentListRelationFilter
    donorTransactions?: DonorTransactionListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrderInput | SortOrder
    creatorBio?: SortOrderInput | SortOrder
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    faqs?: FAQOrderByRelationAggregateInput
    updates?: UpdateOrderByRelationAggregateInput
    donorComments?: DonorCommentOrderByRelationAggregateInput
    donorTransactions?: DonorTransactionOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    shortDescription?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    tags?: StringNullableListFilter<"Campaign">
    creatorId?: StringFilter<"Campaign"> | string
    creatorName?: StringFilter<"Campaign"> | string
    creatorImage?: StringNullableFilter<"Campaign"> | string | null
    creatorBio?: StringNullableFilter<"Campaign"> | string | null
    amountRaised?: IntFilter<"Campaign"> | number
    goalAmount?: IntFilter<"Campaign"> | number
    donorsCount?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    location?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    featured?: BoolFilter<"Campaign"> | boolean
    verified?: BoolFilter<"Campaign"> | boolean
    faqs?: FAQListRelationFilter
    updates?: UpdateListRelationFilter
    donorComments?: DonorCommentListRelationFilter
    donorTransactions?: DonorTransactionListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrderInput | SortOrder
    creatorBio?: SortOrderInput | SortOrder
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    shortDescription?: StringWithAggregatesFilter<"Campaign"> | string
    image?: StringWithAggregatesFilter<"Campaign"> | string
    category?: StringWithAggregatesFilter<"Campaign"> | string
    tags?: StringNullableListFilter<"Campaign">
    creatorId?: StringWithAggregatesFilter<"Campaign"> | string
    creatorName?: StringWithAggregatesFilter<"Campaign"> | string
    creatorImage?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    creatorBio?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    amountRaised?: IntWithAggregatesFilter<"Campaign"> | number
    goalAmount?: IntWithAggregatesFilter<"Campaign"> | number
    donorsCount?: IntWithAggregatesFilter<"Campaign"> | number
    startDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    location?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    featured?: BoolWithAggregatesFilter<"Campaign"> | boolean
    verified?: BoolWithAggregatesFilter<"Campaign"> | boolean
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    campaignId?: StringFilter<"FAQ"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    campaignId?: StringFilter<"FAQ"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    campaignId?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question?: StringWithAggregatesFilter<"FAQ"> | string
    answer?: StringWithAggregatesFilter<"FAQ"> | string
    campaignId?: StringWithAggregatesFilter<"FAQ"> | string
  }

  export type UpdateWhereInput = {
    AND?: UpdateWhereInput | UpdateWhereInput[]
    OR?: UpdateWhereInput[]
    NOT?: UpdateWhereInput | UpdateWhereInput[]
    id?: StringFilter<"Update"> | string
    title?: StringFilter<"Update"> | string
    content?: StringFilter<"Update"> | string
    date?: DateTimeFilter<"Update"> | Date | string
    creatorName?: StringFilter<"Update"> | string
    creatorImage?: StringNullableFilter<"Update"> | string | null
    campaignId?: StringFilter<"Update"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type UpdateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type UpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpdateWhereInput | UpdateWhereInput[]
    OR?: UpdateWhereInput[]
    NOT?: UpdateWhereInput | UpdateWhereInput[]
    title?: StringFilter<"Update"> | string
    content?: StringFilter<"Update"> | string
    date?: DateTimeFilter<"Update"> | Date | string
    creatorName?: StringFilter<"Update"> | string
    creatorImage?: StringNullableFilter<"Update"> | string | null
    campaignId?: StringFilter<"Update"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type UpdateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    _count?: UpdateCountOrderByAggregateInput
    _max?: UpdateMaxOrderByAggregateInput
    _min?: UpdateMinOrderByAggregateInput
  }

  export type UpdateScalarWhereWithAggregatesInput = {
    AND?: UpdateScalarWhereWithAggregatesInput | UpdateScalarWhereWithAggregatesInput[]
    OR?: UpdateScalarWhereWithAggregatesInput[]
    NOT?: UpdateScalarWhereWithAggregatesInput | UpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Update"> | string
    title?: StringWithAggregatesFilter<"Update"> | string
    content?: StringWithAggregatesFilter<"Update"> | string
    date?: DateTimeWithAggregatesFilter<"Update"> | Date | string
    creatorName?: StringWithAggregatesFilter<"Update"> | string
    creatorImage?: StringNullableWithAggregatesFilter<"Update"> | string | null
    campaignId?: StringWithAggregatesFilter<"Update"> | string
  }

  export type DonorCommentWhereInput = {
    AND?: DonorCommentWhereInput | DonorCommentWhereInput[]
    OR?: DonorCommentWhereInput[]
    NOT?: DonorCommentWhereInput | DonorCommentWhereInput[]
    id?: StringFilter<"DonorComment"> | string
    isAnonymous?: BoolNullableFilter<"DonorComment"> | boolean | null
    content?: StringNullableFilter<"DonorComment"> | string | null
    userName?: StringFilter<"DonorComment"> | string
    userImage?: StringNullableFilter<"DonorComment"> | string | null
    date?: DateTimeFilter<"DonorComment"> | Date | string
    campaignId?: StringFilter<"DonorComment"> | string
    userId?: StringNullableFilter<"DonorComment"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DonorCommentOrderByWithRelationInput = {
    id?: SortOrder
    isAnonymous?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    userName?: SortOrder
    userImage?: SortOrderInput | SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrderInput | SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DonorCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonorCommentWhereInput | DonorCommentWhereInput[]
    OR?: DonorCommentWhereInput[]
    NOT?: DonorCommentWhereInput | DonorCommentWhereInput[]
    isAnonymous?: BoolNullableFilter<"DonorComment"> | boolean | null
    content?: StringNullableFilter<"DonorComment"> | string | null
    userName?: StringFilter<"DonorComment"> | string
    userImage?: StringNullableFilter<"DonorComment"> | string | null
    date?: DateTimeFilter<"DonorComment"> | Date | string
    campaignId?: StringFilter<"DonorComment"> | string
    userId?: StringNullableFilter<"DonorComment"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DonorCommentOrderByWithAggregationInput = {
    id?: SortOrder
    isAnonymous?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    userName?: SortOrder
    userImage?: SortOrderInput | SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DonorCommentCountOrderByAggregateInput
    _max?: DonorCommentMaxOrderByAggregateInput
    _min?: DonorCommentMinOrderByAggregateInput
  }

  export type DonorCommentScalarWhereWithAggregatesInput = {
    AND?: DonorCommentScalarWhereWithAggregatesInput | DonorCommentScalarWhereWithAggregatesInput[]
    OR?: DonorCommentScalarWhereWithAggregatesInput[]
    NOT?: DonorCommentScalarWhereWithAggregatesInput | DonorCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonorComment"> | string
    isAnonymous?: BoolNullableWithAggregatesFilter<"DonorComment"> | boolean | null
    content?: StringNullableWithAggregatesFilter<"DonorComment"> | string | null
    userName?: StringWithAggregatesFilter<"DonorComment"> | string
    userImage?: StringNullableWithAggregatesFilter<"DonorComment"> | string | null
    date?: DateTimeWithAggregatesFilter<"DonorComment"> | Date | string
    campaignId?: StringWithAggregatesFilter<"DonorComment"> | string
    userId?: StringNullableWithAggregatesFilter<"DonorComment"> | string | null
  }

  export type DonorTransactionWhereInput = {
    AND?: DonorTransactionWhereInput | DonorTransactionWhereInput[]
    OR?: DonorTransactionWhereInput[]
    NOT?: DonorTransactionWhereInput | DonorTransactionWhereInput[]
    id?: StringFilter<"DonorTransaction"> | string
    amount?: IntFilter<"DonorTransaction"> | number
    date?: DateTimeFilter<"DonorTransaction"> | Date | string
    paymentMethod?: StringFilter<"DonorTransaction"> | string
    isAnonymous?: BoolFilter<"DonorTransaction"> | boolean
    message?: StringNullableFilter<"DonorTransaction"> | string | null
    donorName?: StringNullableFilter<"DonorTransaction"> | string | null
    campaignId?: StringFilter<"DonorTransaction"> | string
    userId?: StringNullableFilter<"DonorTransaction"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DonorTransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    paymentMethod?: SortOrder
    isAnonymous?: SortOrder
    message?: SortOrderInput | SortOrder
    donorName?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    userId?: SortOrderInput | SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DonorTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonorTransactionWhereInput | DonorTransactionWhereInput[]
    OR?: DonorTransactionWhereInput[]
    NOT?: DonorTransactionWhereInput | DonorTransactionWhereInput[]
    amount?: IntFilter<"DonorTransaction"> | number
    date?: DateTimeFilter<"DonorTransaction"> | Date | string
    paymentMethod?: StringFilter<"DonorTransaction"> | string
    isAnonymous?: BoolFilter<"DonorTransaction"> | boolean
    message?: StringNullableFilter<"DonorTransaction"> | string | null
    donorName?: StringNullableFilter<"DonorTransaction"> | string | null
    campaignId?: StringFilter<"DonorTransaction"> | string
    userId?: StringNullableFilter<"DonorTransaction"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DonorTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    paymentMethod?: SortOrder
    isAnonymous?: SortOrder
    message?: SortOrderInput | SortOrder
    donorName?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DonorTransactionCountOrderByAggregateInput
    _avg?: DonorTransactionAvgOrderByAggregateInput
    _max?: DonorTransactionMaxOrderByAggregateInput
    _min?: DonorTransactionMinOrderByAggregateInput
    _sum?: DonorTransactionSumOrderByAggregateInput
  }

  export type DonorTransactionScalarWhereWithAggregatesInput = {
    AND?: DonorTransactionScalarWhereWithAggregatesInput | DonorTransactionScalarWhereWithAggregatesInput[]
    OR?: DonorTransactionScalarWhereWithAggregatesInput[]
    NOT?: DonorTransactionScalarWhereWithAggregatesInput | DonorTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonorTransaction"> | string
    amount?: IntWithAggregatesFilter<"DonorTransaction"> | number
    date?: DateTimeWithAggregatesFilter<"DonorTransaction"> | Date | string
    paymentMethod?: StringWithAggregatesFilter<"DonorTransaction"> | string
    isAnonymous?: BoolWithAggregatesFilter<"DonorTransaction"> | boolean
    message?: StringNullableWithAggregatesFilter<"DonorTransaction"> | string | null
    donorName?: StringNullableWithAggregatesFilter<"DonorTransaction"> | string | null
    campaignId?: StringWithAggregatesFilter<"DonorTransaction"> | string
    userId?: StringNullableWithAggregatesFilter<"DonorTransaction"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdCampaigns?: CampaignListRelationFilter
    donorComments?: DonorCommentListRelationFilter
    donorTransactions?: DonorTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdCampaigns?: CampaignOrderByRelationAggregateInput
    donorComments?: DonorCommentOrderByRelationAggregateInput
    donorTransactions?: DonorTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdCampaigns?: CampaignListRelationFilter
    donorComments?: DonorCommentListRelationFilter
    donorTransactions?: DonorTransactionListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type CampaignCreateInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQCreateNestedManyWithoutCampaignInput
    updates?: UpdateCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutCampaignInput
    creator?: UserCreateNestedOneWithoutCreatedCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQUncheckedCreateNestedManyWithoutCampaignInput
    updates?: UpdateUncheckedCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutCampaignNestedInput
    creator?: UserUpdateOneWithoutCreatedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUncheckedUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FAQCreateInput = {
    id?: string
    question: string
    answer: string
    campaign: CampaignCreateNestedOneWithoutFaqsInput
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    campaignId: string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    campaign?: CampaignUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question: string
    answer: string
    campaignId: string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
    campaign: CampaignCreateNestedOneWithoutUpdatesInput
  }

  export type UpdateUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
    campaignId: string
  }

  export type UpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type UpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateCreateManyInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
    campaignId: string
  }

  export type UpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonorCommentCreateInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaign: CampaignCreateNestedOneWithoutDonorCommentsInput
    user?: UserCreateNestedOneWithoutDonorCommentsInput
  }

  export type DonorCommentUncheckedCreateInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaignId: string
    userId?: string | null
  }

  export type DonorCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonorCommentsNestedInput
    user?: UserUpdateOneWithoutDonorCommentsNestedInput
  }

  export type DonorCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorCommentCreateManyInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaignId: string
    userId?: string | null
  }

  export type DonorCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorTransactionCreateInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaign: CampaignCreateNestedOneWithoutDonorTransactionsInput
    user?: UserCreateNestedOneWithoutDonorTransactionsInput
  }

  export type DonorTransactionUncheckedCreateInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaignId: string
    userId?: string | null
  }

  export type DonorTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutDonorTransactionsNestedInput
    user?: UserUpdateOneWithoutDonorTransactionsNestedInput
  }

  export type DonorTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorTransactionCreateManyInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaignId: string
    userId?: string | null
  }

  export type DonorTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    donorComments?: DonorCommentCreateNestedManyWithoutUserInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutUserInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    donorComments?: DonorCommentUpdateManyWithoutUserNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutUserNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FAQListRelationFilter = {
    every?: FAQWhereInput
    some?: FAQWhereInput
    none?: FAQWhereInput
  }

  export type UpdateListRelationFilter = {
    every?: UpdateWhereInput
    some?: UpdateWhereInput
    none?: UpdateWhereInput
  }

  export type DonorCommentListRelationFilter = {
    every?: DonorCommentWhereInput
    some?: DonorCommentWhereInput
    none?: DonorCommentWhereInput
  }

  export type DonorTransactionListRelationFilter = {
    every?: DonorTransactionWhereInput
    some?: DonorTransactionWhereInput
    none?: DonorTransactionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    creatorBio?: SortOrder
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    category?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    creatorBio?: SortOrder
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    category?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    creatorBio?: SortOrder
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    amountRaised?: SortOrder
    goalAmount?: SortOrder
    donorsCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    campaignId?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    campaignId?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    campaignId?: SortOrder
  }

  export type UpdateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    campaignId?: SortOrder
  }

  export type UpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    campaignId?: SortOrder
  }

  export type UpdateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    campaignId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DonorCommentCountOrderByAggregateInput = {
    id?: SortOrder
    isAnonymous?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type DonorCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    isAnonymous?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type DonorCommentMinOrderByAggregateInput = {
    id?: SortOrder
    isAnonymous?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DonorTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    paymentMethod?: SortOrder
    isAnonymous?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type DonorTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DonorTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    paymentMethod?: SortOrder
    isAnonymous?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type DonorTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    paymentMethod?: SortOrder
    isAnonymous?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type DonorTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type CampaignCreatetagsInput = {
    set: string[]
  }

  export type FAQCreateNestedManyWithoutCampaignInput = {
    create?: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput> | FAQCreateWithoutCampaignInput[] | FAQUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutCampaignInput | FAQCreateOrConnectWithoutCampaignInput[]
    createMany?: FAQCreateManyCampaignInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type UpdateCreateNestedManyWithoutCampaignInput = {
    create?: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput> | UpdateCreateWithoutCampaignInput[] | UpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutCampaignInput | UpdateCreateOrConnectWithoutCampaignInput[]
    createMany?: UpdateCreateManyCampaignInputEnvelope
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
  }

  export type DonorCommentCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput> | DonorCommentCreateWithoutCampaignInput[] | DonorCommentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutCampaignInput | DonorCommentCreateOrConnectWithoutCampaignInput[]
    createMany?: DonorCommentCreateManyCampaignInputEnvelope
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
  }

  export type DonorTransactionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput> | DonorTransactionCreateWithoutCampaignInput[] | DonorTransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutCampaignInput | DonorTransactionCreateOrConnectWithoutCampaignInput[]
    createMany?: DonorTransactionCreateManyCampaignInputEnvelope
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCampaignsInput = {
    create?: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type FAQUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput> | FAQCreateWithoutCampaignInput[] | FAQUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutCampaignInput | FAQCreateOrConnectWithoutCampaignInput[]
    createMany?: FAQCreateManyCampaignInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type UpdateUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput> | UpdateCreateWithoutCampaignInput[] | UpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutCampaignInput | UpdateCreateOrConnectWithoutCampaignInput[]
    createMany?: UpdateCreateManyCampaignInputEnvelope
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
  }

  export type DonorCommentUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput> | DonorCommentCreateWithoutCampaignInput[] | DonorCommentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutCampaignInput | DonorCommentCreateOrConnectWithoutCampaignInput[]
    createMany?: DonorCommentCreateManyCampaignInputEnvelope
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
  }

  export type DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput> | DonorTransactionCreateWithoutCampaignInput[] | DonorTransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutCampaignInput | DonorTransactionCreateOrConnectWithoutCampaignInput[]
    createMany?: DonorTransactionCreateManyCampaignInputEnvelope
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CampaignUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FAQUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput> | FAQCreateWithoutCampaignInput[] | FAQUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutCampaignInput | FAQCreateOrConnectWithoutCampaignInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutCampaignInput | FAQUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: FAQCreateManyCampaignInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutCampaignInput | FAQUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutCampaignInput | FAQUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type UpdateUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput> | UpdateCreateWithoutCampaignInput[] | UpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutCampaignInput | UpdateCreateOrConnectWithoutCampaignInput[]
    upsert?: UpdateUpsertWithWhereUniqueWithoutCampaignInput | UpdateUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: UpdateCreateManyCampaignInputEnvelope
    set?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    disconnect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    delete?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    update?: UpdateUpdateWithWhereUniqueWithoutCampaignInput | UpdateUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: UpdateUpdateManyWithWhereWithoutCampaignInput | UpdateUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
  }

  export type DonorCommentUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput> | DonorCommentCreateWithoutCampaignInput[] | DonorCommentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutCampaignInput | DonorCommentCreateOrConnectWithoutCampaignInput[]
    upsert?: DonorCommentUpsertWithWhereUniqueWithoutCampaignInput | DonorCommentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonorCommentCreateManyCampaignInputEnvelope
    set?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    disconnect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    delete?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    update?: DonorCommentUpdateWithWhereUniqueWithoutCampaignInput | DonorCommentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonorCommentUpdateManyWithWhereWithoutCampaignInput | DonorCommentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
  }

  export type DonorTransactionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput> | DonorTransactionCreateWithoutCampaignInput[] | DonorTransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutCampaignInput | DonorTransactionCreateOrConnectWithoutCampaignInput[]
    upsert?: DonorTransactionUpsertWithWhereUniqueWithoutCampaignInput | DonorTransactionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonorTransactionCreateManyCampaignInputEnvelope
    set?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    disconnect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    delete?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    update?: DonorTransactionUpdateWithWhereUniqueWithoutCampaignInput | DonorTransactionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonorTransactionUpdateManyWithWhereWithoutCampaignInput | DonorTransactionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCampaignsInput
    upsert?: UserUpsertWithoutCreatedCampaignsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCampaignsInput, UserUpdateWithoutCreatedCampaignsInput>, UserUncheckedUpdateWithoutCreatedCampaignsInput>
  }

  export type FAQUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput> | FAQCreateWithoutCampaignInput[] | FAQUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutCampaignInput | FAQCreateOrConnectWithoutCampaignInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutCampaignInput | FAQUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: FAQCreateManyCampaignInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutCampaignInput | FAQUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutCampaignInput | FAQUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type UpdateUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput> | UpdateCreateWithoutCampaignInput[] | UpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutCampaignInput | UpdateCreateOrConnectWithoutCampaignInput[]
    upsert?: UpdateUpsertWithWhereUniqueWithoutCampaignInput | UpdateUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: UpdateCreateManyCampaignInputEnvelope
    set?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    disconnect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    delete?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    update?: UpdateUpdateWithWhereUniqueWithoutCampaignInput | UpdateUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: UpdateUpdateManyWithWhereWithoutCampaignInput | UpdateUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
  }

  export type DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput> | DonorCommentCreateWithoutCampaignInput[] | DonorCommentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutCampaignInput | DonorCommentCreateOrConnectWithoutCampaignInput[]
    upsert?: DonorCommentUpsertWithWhereUniqueWithoutCampaignInput | DonorCommentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonorCommentCreateManyCampaignInputEnvelope
    set?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    disconnect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    delete?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    update?: DonorCommentUpdateWithWhereUniqueWithoutCampaignInput | DonorCommentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonorCommentUpdateManyWithWhereWithoutCampaignInput | DonorCommentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
  }

  export type DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput> | DonorTransactionCreateWithoutCampaignInput[] | DonorTransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutCampaignInput | DonorTransactionCreateOrConnectWithoutCampaignInput[]
    upsert?: DonorTransactionUpsertWithWhereUniqueWithoutCampaignInput | DonorTransactionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonorTransactionCreateManyCampaignInputEnvelope
    set?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    disconnect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    delete?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    update?: DonorTransactionUpdateWithWhereUniqueWithoutCampaignInput | DonorTransactionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonorTransactionUpdateManyWithWhereWithoutCampaignInput | DonorTransactionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutFaqsInput = {
    create?: XOR<CampaignCreateWithoutFaqsInput, CampaignUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutFaqsInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<CampaignCreateWithoutFaqsInput, CampaignUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutFaqsInput
    upsert?: CampaignUpsertWithoutFaqsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutFaqsInput, CampaignUpdateWithoutFaqsInput>, CampaignUncheckedUpdateWithoutFaqsInput>
  }

  export type CampaignCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutUpdatesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutUpdatesInput
    upsert?: CampaignUpsertWithoutUpdatesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutUpdatesInput, CampaignUpdateWithoutUpdatesInput>, CampaignUncheckedUpdateWithoutUpdatesInput>
  }

  export type CampaignCreateNestedOneWithoutDonorCommentsInput = {
    create?: XOR<CampaignCreateWithoutDonorCommentsInput, CampaignUncheckedCreateWithoutDonorCommentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonorCommentsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonorCommentsInput = {
    create?: XOR<UserCreateWithoutDonorCommentsInput, UserUncheckedCreateWithoutDonorCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CampaignUpdateOneRequiredWithoutDonorCommentsNestedInput = {
    create?: XOR<CampaignCreateWithoutDonorCommentsInput, CampaignUncheckedCreateWithoutDonorCommentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonorCommentsInput
    upsert?: CampaignUpsertWithoutDonorCommentsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutDonorCommentsInput, CampaignUpdateWithoutDonorCommentsInput>, CampaignUncheckedUpdateWithoutDonorCommentsInput>
  }

  export type UserUpdateOneWithoutDonorCommentsNestedInput = {
    create?: XOR<UserCreateWithoutDonorCommentsInput, UserUncheckedCreateWithoutDonorCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorCommentsInput
    upsert?: UserUpsertWithoutDonorCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonorCommentsInput, UserUpdateWithoutDonorCommentsInput>, UserUncheckedUpdateWithoutDonorCommentsInput>
  }

  export type CampaignCreateNestedOneWithoutDonorTransactionsInput = {
    create?: XOR<CampaignCreateWithoutDonorTransactionsInput, CampaignUncheckedCreateWithoutDonorTransactionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonorTransactionsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonorTransactionsInput = {
    create?: XOR<UserCreateWithoutDonorTransactionsInput, UserUncheckedCreateWithoutDonorTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutDonorTransactionsNestedInput = {
    create?: XOR<CampaignCreateWithoutDonorTransactionsInput, CampaignUncheckedCreateWithoutDonorTransactionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonorTransactionsInput
    upsert?: CampaignUpsertWithoutDonorTransactionsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutDonorTransactionsInput, CampaignUpdateWithoutDonorTransactionsInput>, CampaignUncheckedUpdateWithoutDonorTransactionsInput>
  }

  export type UserUpdateOneWithoutDonorTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutDonorTransactionsInput, UserUncheckedCreateWithoutDonorTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorTransactionsInput
    upsert?: UserUpsertWithoutDonorTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonorTransactionsInput, UserUpdateWithoutDonorTransactionsInput>, UserUncheckedUpdateWithoutDonorTransactionsInput>
  }

  export type CampaignCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DonorCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput> | DonorCommentCreateWithoutUserInput[] | DonorCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutUserInput | DonorCommentCreateOrConnectWithoutUserInput[]
    createMany?: DonorCommentCreateManyUserInputEnvelope
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
  }

  export type DonorTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput> | DonorTransactionCreateWithoutUserInput[] | DonorTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutUserInput | DonorTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DonorTransactionCreateManyUserInputEnvelope
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DonorCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput> | DonorCommentCreateWithoutUserInput[] | DonorCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutUserInput | DonorCommentCreateOrConnectWithoutUserInput[]
    createMany?: DonorCommentCreateManyUserInputEnvelope
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
  }

  export type DonorTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput> | DonorTransactionCreateWithoutUserInput[] | DonorTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutUserInput | DonorTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DonorTransactionCreateManyUserInputEnvelope
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type CampaignUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DonorCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput> | DonorCommentCreateWithoutUserInput[] | DonorCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutUserInput | DonorCommentCreateOrConnectWithoutUserInput[]
    upsert?: DonorCommentUpsertWithWhereUniqueWithoutUserInput | DonorCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonorCommentCreateManyUserInputEnvelope
    set?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    disconnect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    delete?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    update?: DonorCommentUpdateWithWhereUniqueWithoutUserInput | DonorCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonorCommentUpdateManyWithWhereWithoutUserInput | DonorCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
  }

  export type DonorTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput> | DonorTransactionCreateWithoutUserInput[] | DonorTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutUserInput | DonorTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DonorTransactionUpsertWithWhereUniqueWithoutUserInput | DonorTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonorTransactionCreateManyUserInputEnvelope
    set?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    disconnect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    delete?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    update?: DonorTransactionUpdateWithWhereUniqueWithoutUserInput | DonorTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonorTransactionUpdateManyWithWhereWithoutUserInput | DonorTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DonorCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput> | DonorCommentCreateWithoutUserInput[] | DonorCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorCommentCreateOrConnectWithoutUserInput | DonorCommentCreateOrConnectWithoutUserInput[]
    upsert?: DonorCommentUpsertWithWhereUniqueWithoutUserInput | DonorCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonorCommentCreateManyUserInputEnvelope
    set?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    disconnect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    delete?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    connect?: DonorCommentWhereUniqueInput | DonorCommentWhereUniqueInput[]
    update?: DonorCommentUpdateWithWhereUniqueWithoutUserInput | DonorCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonorCommentUpdateManyWithWhereWithoutUserInput | DonorCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
  }

  export type DonorTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput> | DonorTransactionCreateWithoutUserInput[] | DonorTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonorTransactionCreateOrConnectWithoutUserInput | DonorTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DonorTransactionUpsertWithWhereUniqueWithoutUserInput | DonorTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonorTransactionCreateManyUserInputEnvelope
    set?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    disconnect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    delete?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    connect?: DonorTransactionWhereUniqueInput | DonorTransactionWhereUniqueInput[]
    update?: DonorTransactionUpdateWithWhereUniqueWithoutUserInput | DonorTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonorTransactionUpdateManyWithWhereWithoutUserInput | DonorTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type FAQCreateWithoutCampaignInput = {
    id?: string
    question: string
    answer: string
  }

  export type FAQUncheckedCreateWithoutCampaignInput = {
    id?: string
    question: string
    answer: string
  }

  export type FAQCreateOrConnectWithoutCampaignInput = {
    where: FAQWhereUniqueInput
    create: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput>
  }

  export type FAQCreateManyCampaignInputEnvelope = {
    data: FAQCreateManyCampaignInput | FAQCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UpdateCreateWithoutCampaignInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
  }

  export type UpdateUncheckedCreateWithoutCampaignInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
  }

  export type UpdateCreateOrConnectWithoutCampaignInput = {
    where: UpdateWhereUniqueInput
    create: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput>
  }

  export type UpdateCreateManyCampaignInputEnvelope = {
    data: UpdateCreateManyCampaignInput | UpdateCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type DonorCommentCreateWithoutCampaignInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    user?: UserCreateNestedOneWithoutDonorCommentsInput
  }

  export type DonorCommentUncheckedCreateWithoutCampaignInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    userId?: string | null
  }

  export type DonorCommentCreateOrConnectWithoutCampaignInput = {
    where: DonorCommentWhereUniqueInput
    create: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput>
  }

  export type DonorCommentCreateManyCampaignInputEnvelope = {
    data: DonorCommentCreateManyCampaignInput | DonorCommentCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type DonorTransactionCreateWithoutCampaignInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    user?: UserCreateNestedOneWithoutDonorTransactionsInput
  }

  export type DonorTransactionUncheckedCreateWithoutCampaignInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    userId?: string | null
  }

  export type DonorTransactionCreateOrConnectWithoutCampaignInput = {
    where: DonorTransactionWhereUniqueInput
    create: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput>
  }

  export type DonorTransactionCreateManyCampaignInputEnvelope = {
    data: DonorTransactionCreateManyCampaignInput | DonorTransactionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedCampaignsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    donorComments?: DonorCommentCreateNestedManyWithoutUserInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCampaignsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutUserInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
  }

  export type FAQUpsertWithWhereUniqueWithoutCampaignInput = {
    where: FAQWhereUniqueInput
    update: XOR<FAQUpdateWithoutCampaignInput, FAQUncheckedUpdateWithoutCampaignInput>
    create: XOR<FAQCreateWithoutCampaignInput, FAQUncheckedCreateWithoutCampaignInput>
  }

  export type FAQUpdateWithWhereUniqueWithoutCampaignInput = {
    where: FAQWhereUniqueInput
    data: XOR<FAQUpdateWithoutCampaignInput, FAQUncheckedUpdateWithoutCampaignInput>
  }

  export type FAQUpdateManyWithWhereWithoutCampaignInput = {
    where: FAQScalarWhereInput
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyWithoutCampaignInput>
  }

  export type FAQScalarWhereInput = {
    AND?: FAQScalarWhereInput | FAQScalarWhereInput[]
    OR?: FAQScalarWhereInput[]
    NOT?: FAQScalarWhereInput | FAQScalarWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    campaignId?: StringFilter<"FAQ"> | string
  }

  export type UpdateUpsertWithWhereUniqueWithoutCampaignInput = {
    where: UpdateWhereUniqueInput
    update: XOR<UpdateUpdateWithoutCampaignInput, UpdateUncheckedUpdateWithoutCampaignInput>
    create: XOR<UpdateCreateWithoutCampaignInput, UpdateUncheckedCreateWithoutCampaignInput>
  }

  export type UpdateUpdateWithWhereUniqueWithoutCampaignInput = {
    where: UpdateWhereUniqueInput
    data: XOR<UpdateUpdateWithoutCampaignInput, UpdateUncheckedUpdateWithoutCampaignInput>
  }

  export type UpdateUpdateManyWithWhereWithoutCampaignInput = {
    where: UpdateScalarWhereInput
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyWithoutCampaignInput>
  }

  export type UpdateScalarWhereInput = {
    AND?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
    OR?: UpdateScalarWhereInput[]
    NOT?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
    id?: StringFilter<"Update"> | string
    title?: StringFilter<"Update"> | string
    content?: StringFilter<"Update"> | string
    date?: DateTimeFilter<"Update"> | Date | string
    creatorName?: StringFilter<"Update"> | string
    creatorImage?: StringNullableFilter<"Update"> | string | null
    campaignId?: StringFilter<"Update"> | string
  }

  export type DonorCommentUpsertWithWhereUniqueWithoutCampaignInput = {
    where: DonorCommentWhereUniqueInput
    update: XOR<DonorCommentUpdateWithoutCampaignInput, DonorCommentUncheckedUpdateWithoutCampaignInput>
    create: XOR<DonorCommentCreateWithoutCampaignInput, DonorCommentUncheckedCreateWithoutCampaignInput>
  }

  export type DonorCommentUpdateWithWhereUniqueWithoutCampaignInput = {
    where: DonorCommentWhereUniqueInput
    data: XOR<DonorCommentUpdateWithoutCampaignInput, DonorCommentUncheckedUpdateWithoutCampaignInput>
  }

  export type DonorCommentUpdateManyWithWhereWithoutCampaignInput = {
    where: DonorCommentScalarWhereInput
    data: XOR<DonorCommentUpdateManyMutationInput, DonorCommentUncheckedUpdateManyWithoutCampaignInput>
  }

  export type DonorCommentScalarWhereInput = {
    AND?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
    OR?: DonorCommentScalarWhereInput[]
    NOT?: DonorCommentScalarWhereInput | DonorCommentScalarWhereInput[]
    id?: StringFilter<"DonorComment"> | string
    isAnonymous?: BoolNullableFilter<"DonorComment"> | boolean | null
    content?: StringNullableFilter<"DonorComment"> | string | null
    userName?: StringFilter<"DonorComment"> | string
    userImage?: StringNullableFilter<"DonorComment"> | string | null
    date?: DateTimeFilter<"DonorComment"> | Date | string
    campaignId?: StringFilter<"DonorComment"> | string
    userId?: StringNullableFilter<"DonorComment"> | string | null
  }

  export type DonorTransactionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: DonorTransactionWhereUniqueInput
    update: XOR<DonorTransactionUpdateWithoutCampaignInput, DonorTransactionUncheckedUpdateWithoutCampaignInput>
    create: XOR<DonorTransactionCreateWithoutCampaignInput, DonorTransactionUncheckedCreateWithoutCampaignInput>
  }

  export type DonorTransactionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: DonorTransactionWhereUniqueInput
    data: XOR<DonorTransactionUpdateWithoutCampaignInput, DonorTransactionUncheckedUpdateWithoutCampaignInput>
  }

  export type DonorTransactionUpdateManyWithWhereWithoutCampaignInput = {
    where: DonorTransactionScalarWhereInput
    data: XOR<DonorTransactionUpdateManyMutationInput, DonorTransactionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type DonorTransactionScalarWhereInput = {
    AND?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
    OR?: DonorTransactionScalarWhereInput[]
    NOT?: DonorTransactionScalarWhereInput | DonorTransactionScalarWhereInput[]
    id?: StringFilter<"DonorTransaction"> | string
    amount?: IntFilter<"DonorTransaction"> | number
    date?: DateTimeFilter<"DonorTransaction"> | Date | string
    paymentMethod?: StringFilter<"DonorTransaction"> | string
    isAnonymous?: BoolFilter<"DonorTransaction"> | boolean
    message?: StringNullableFilter<"DonorTransaction"> | string | null
    donorName?: StringNullableFilter<"DonorTransaction"> | string | null
    campaignId?: StringFilter<"DonorTransaction"> | string
    userId?: StringNullableFilter<"DonorTransaction"> | string | null
  }

  export type UserUpsertWithoutCreatedCampaignsInput = {
    update: XOR<UserUpdateWithoutCreatedCampaignsInput, UserUncheckedUpdateWithoutCreatedCampaignsInput>
    create: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCampaignsInput, UserUncheckedUpdateWithoutCreatedCampaignsInput>
  }

  export type UserUpdateWithoutCreatedCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    donorComments?: DonorCommentUpdateManyWithoutUserNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    donorComments?: DonorCommentUncheckedUpdateManyWithoutUserNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutFaqsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    updates?: UpdateCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutCampaignInput
    creator?: UserCreateNestedOneWithoutCreatedCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutFaqsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    updates?: UpdateUncheckedCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutFaqsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutFaqsInput, CampaignUncheckedCreateWithoutFaqsInput>
  }

  export type CampaignUpsertWithoutFaqsInput = {
    update: XOR<CampaignUpdateWithoutFaqsInput, CampaignUncheckedUpdateWithoutFaqsInput>
    create: XOR<CampaignCreateWithoutFaqsInput, CampaignUncheckedCreateWithoutFaqsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutFaqsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutFaqsInput, CampaignUncheckedUpdateWithoutFaqsInput>
  }

  export type CampaignUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    updates?: UpdateUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutCampaignNestedInput
    creator?: UserUpdateOneWithoutCreatedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    updates?: UpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutCampaignInput
    creator?: UserCreateNestedOneWithoutCreatedCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQUncheckedCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUpdatesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
  }

  export type CampaignUpsertWithoutUpdatesInput = {
    update: XOR<CampaignUpdateWithoutUpdatesInput, CampaignUncheckedUpdateWithoutUpdatesInput>
    create: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutUpdatesInput, CampaignUncheckedUpdateWithoutUpdatesInput>
  }

  export type CampaignUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutCampaignNestedInput
    creator?: UserUpdateOneWithoutCreatedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUncheckedUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutDonorCommentsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQCreateNestedManyWithoutCampaignInput
    updates?: UpdateCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutCampaignInput
    creator?: UserCreateNestedOneWithoutCreatedCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutDonorCommentsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQUncheckedCreateNestedManyWithoutCampaignInput
    updates?: UpdateUncheckedCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutDonorCommentsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutDonorCommentsInput, CampaignUncheckedCreateWithoutDonorCommentsInput>
  }

  export type UserCreateWithoutDonorCommentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonorCommentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonorCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonorCommentsInput, UserUncheckedCreateWithoutDonorCommentsInput>
  }

  export type CampaignUpsertWithoutDonorCommentsInput = {
    update: XOR<CampaignUpdateWithoutDonorCommentsInput, CampaignUncheckedUpdateWithoutDonorCommentsInput>
    create: XOR<CampaignCreateWithoutDonorCommentsInput, CampaignUncheckedCreateWithoutDonorCommentsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutDonorCommentsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutDonorCommentsInput, CampaignUncheckedUpdateWithoutDonorCommentsInput>
  }

  export type CampaignUpdateWithoutDonorCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutCampaignNestedInput
    creator?: UserUpdateOneWithoutCreatedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutDonorCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUncheckedUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutDonorCommentsInput = {
    update: XOR<UserUpdateWithoutDonorCommentsInput, UserUncheckedUpdateWithoutDonorCommentsInput>
    create: XOR<UserCreateWithoutDonorCommentsInput, UserUncheckedCreateWithoutDonorCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonorCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonorCommentsInput, UserUncheckedUpdateWithoutDonorCommentsInput>
  }

  export type UserUpdateWithoutDonorCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonorCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutDonorTransactionsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQCreateNestedManyWithoutCampaignInput
    updates?: UpdateCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentCreateNestedManyWithoutCampaignInput
    creator?: UserCreateNestedOneWithoutCreatedCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutDonorTransactionsInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorId: string
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQUncheckedCreateNestedManyWithoutCampaignInput
    updates?: UpdateUncheckedCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutDonorTransactionsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutDonorTransactionsInput, CampaignUncheckedCreateWithoutDonorTransactionsInput>
  }

  export type UserCreateWithoutDonorTransactionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    donorComments?: DonorCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonorTransactionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string | null
    bio?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonorTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonorTransactionsInput, UserUncheckedCreateWithoutDonorTransactionsInput>
  }

  export type CampaignUpsertWithoutDonorTransactionsInput = {
    update: XOR<CampaignUpdateWithoutDonorTransactionsInput, CampaignUncheckedUpdateWithoutDonorTransactionsInput>
    create: XOR<CampaignCreateWithoutDonorTransactionsInput, CampaignUncheckedCreateWithoutDonorTransactionsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutDonorTransactionsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutDonorTransactionsInput, CampaignUncheckedUpdateWithoutDonorTransactionsInput>
  }

  export type CampaignUpdateWithoutDonorTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUpdateManyWithoutCampaignNestedInput
    creator?: UserUpdateOneWithoutCreatedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutDonorTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUncheckedUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutDonorTransactionsInput = {
    update: XOR<UserUpdateWithoutDonorTransactionsInput, UserUncheckedUpdateWithoutDonorTransactionsInput>
    create: XOR<UserCreateWithoutDonorTransactionsInput, UserUncheckedCreateWithoutDonorTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonorTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonorTransactionsInput, UserUncheckedUpdateWithoutDonorTransactionsInput>
  }

  export type UserUpdateWithoutDonorTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    donorComments?: DonorCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonorTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQCreateNestedManyWithoutCampaignInput
    updates?: UpdateCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
    faqs?: FAQUncheckedCreateNestedManyWithoutCampaignInput
    updates?: UpdateUncheckedCreateNestedManyWithoutCampaignInput
    donorComments?: DonorCommentUncheckedCreateNestedManyWithoutCampaignInput
    donorTransactions?: DonorTransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignCreateManyCreatorInputEnvelope = {
    data: CampaignCreateManyCreatorInput | CampaignCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type DonorCommentCreateWithoutUserInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaign: CampaignCreateNestedOneWithoutDonorCommentsInput
  }

  export type DonorCommentUncheckedCreateWithoutUserInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaignId: string
  }

  export type DonorCommentCreateOrConnectWithoutUserInput = {
    where: DonorCommentWhereUniqueInput
    create: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput>
  }

  export type DonorCommentCreateManyUserInputEnvelope = {
    data: DonorCommentCreateManyUserInput | DonorCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonorTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaign: CampaignCreateNestedOneWithoutDonorTransactionsInput
  }

  export type DonorTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaignId: string
  }

  export type DonorTransactionCreateOrConnectWithoutUserInput = {
    where: DonorTransactionWhereUniqueInput
    create: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput>
  }

  export type DonorTransactionCreateManyUserInputEnvelope = {
    data: DonorTransactionCreateManyUserInput | DonorTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatorInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    shortDescription?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    tags?: StringNullableListFilter<"Campaign">
    creatorId?: StringFilter<"Campaign"> | string
    creatorName?: StringFilter<"Campaign"> | string
    creatorImage?: StringNullableFilter<"Campaign"> | string | null
    creatorBio?: StringNullableFilter<"Campaign"> | string | null
    amountRaised?: IntFilter<"Campaign"> | number
    goalAmount?: IntFilter<"Campaign"> | number
    donorsCount?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    location?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    featured?: BoolFilter<"Campaign"> | boolean
    verified?: BoolFilter<"Campaign"> | boolean
  }

  export type DonorCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: DonorCommentWhereUniqueInput
    update: XOR<DonorCommentUpdateWithoutUserInput, DonorCommentUncheckedUpdateWithoutUserInput>
    create: XOR<DonorCommentCreateWithoutUserInput, DonorCommentUncheckedCreateWithoutUserInput>
  }

  export type DonorCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: DonorCommentWhereUniqueInput
    data: XOR<DonorCommentUpdateWithoutUserInput, DonorCommentUncheckedUpdateWithoutUserInput>
  }

  export type DonorCommentUpdateManyWithWhereWithoutUserInput = {
    where: DonorCommentScalarWhereInput
    data: XOR<DonorCommentUpdateManyMutationInput, DonorCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type DonorTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: DonorTransactionWhereUniqueInput
    update: XOR<DonorTransactionUpdateWithoutUserInput, DonorTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<DonorTransactionCreateWithoutUserInput, DonorTransactionUncheckedCreateWithoutUserInput>
  }

  export type DonorTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: DonorTransactionWhereUniqueInput
    data: XOR<DonorTransactionUpdateWithoutUserInput, DonorTransactionUncheckedUpdateWithoutUserInput>
  }

  export type DonorTransactionUpdateManyWithWhereWithoutUserInput = {
    where: DonorTransactionScalarWhereInput
    data: XOR<DonorTransactionUpdateManyMutationInput, DonorTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type FAQCreateManyCampaignInput = {
    id?: string
    question: string
    answer: string
  }

  export type UpdateCreateManyCampaignInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    creatorName: string
    creatorImage?: string | null
  }

  export type DonorCommentCreateManyCampaignInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    userId?: string | null
  }

  export type DonorTransactionCreateManyCampaignInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    userId?: string | null
  }

  export type FAQUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpdateUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpdateUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorCommentUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDonorCommentsNestedInput
  }

  export type DonorCommentUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorCommentUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorTransactionUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutDonorTransactionsNestedInput
  }

  export type DonorTransactionUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorTransactionUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: string
    tags?: CampaignCreatetagsInput | string[]
    creatorName: string
    creatorImage?: string | null
    creatorBio?: string | null
    amountRaised: number
    goalAmount: number
    donorsCount: number
    startDate: Date | string
    endDate: Date | string
    location: string
    status?: $Enums.CampaignStatus
    featured?: boolean
    verified?: boolean
  }

  export type DonorCommentCreateManyUserInput = {
    id?: string
    isAnonymous?: boolean | null
    content?: string | null
    userName: string
    userImage?: string | null
    date: Date | string
    campaignId: string
  }

  export type DonorTransactionCreateManyUserInput = {
    id?: string
    amount: number
    date: Date | string
    paymentMethod: string
    isAnonymous?: boolean
    message?: string | null
    donorName?: string | null
    campaignId: string
  }

  export type CampaignUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    faqs?: FAQUncheckedUpdateManyWithoutCampaignNestedInput
    updates?: UpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donorComments?: DonorCommentUncheckedUpdateManyWithoutCampaignNestedInput
    donorTransactions?: DonorTransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: CampaignUpdatetagsInput | string[]
    creatorName?: StringFieldUpdateOperationsInput | string
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    creatorBio?: NullableStringFieldUpdateOperationsInput | string | null
    amountRaised?: IntFieldUpdateOperationsInput | number
    goalAmount?: IntFieldUpdateOperationsInput | number
    donorsCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DonorCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonorCommentsNestedInput
  }

  export type DonorCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonorCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonorTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutDonorTransactionsNestedInput
  }

  export type DonorTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonorTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}