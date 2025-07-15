
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
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model AgentActivity
 * 
 */
export type AgentActivity = $Result.DefaultSelection<Prisma.$AgentActivityPayload>
/**
 * Model IntelligenceReport
 * 
 */
export type IntelligenceReport = $Result.DefaultSelection<Prisma.$IntelligenceReportPayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>
/**
 * Model AgentOperation
 * 
 */
export type AgentOperation = $Result.DefaultSelection<Prisma.$AgentOperationPayload>
/**
 * Model System
 * 
 */
export type System = $Result.DefaultSelection<Prisma.$SystemPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AgentStatus: {
  ACTIVE: 'ACTIVE',
  STANDBY: 'STANDBY',
  TRAINING: 'TRAINING',
  COMPROMISED: 'COMPROMISED',
  DECEASED: 'DECEASED'
};

export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus]


export const RiskLevel: {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const OperationStatus: {
  PLANNING: 'PLANNING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  COMPROMISED: 'COMPROMISED',
  ABORTED: 'ABORTED'
};

export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus]


export const PriorityLevel: {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type PriorityLevel = (typeof PriorityLevel)[keyof typeof PriorityLevel]


export const ClassificationLevel: {
  TOP_SECRET: 'TOP_SECRET',
  SECRET: 'SECRET',
  CONFIDENTIAL: 'CONFIDENTIAL',
  UNCLASSIFIED: 'UNCLASSIFIED'
};

export type ClassificationLevel = (typeof ClassificationLevel)[keyof typeof ClassificationLevel]


export const IntelligenceSource: {
  SIGINT: 'SIGINT',
  HUMINT: 'HUMINT',
  OSINT: 'OSINT',
  DIPLOMATIC: 'DIPLOMATIC',
  TECHNICAL: 'TECHNICAL'
};

export type IntelligenceSource = (typeof IntelligenceSource)[keyof typeof IntelligenceSource]


export const ReportStatus: {
  VERIFIED: 'VERIFIED',
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const SystemStatus: {
  ONLINE: 'ONLINE',
  WARNING: 'WARNING',
  MAINTENANCE: 'MAINTENANCE',
  OFFLINE: 'OFFLINE'
};

export type SystemStatus = (typeof SystemStatus)[keyof typeof SystemStatus]


export const SystemType: {
  PRIMARY_SERVER: 'PRIMARY_SERVER',
  DATABASE: 'DATABASE',
  FIREWALL: 'FIREWALL',
  NETWORK: 'NETWORK',
  STORAGE: 'STORAGE',
  PROCESSING: 'PROCESSING'
};

export type SystemType = (typeof SystemType)[keyof typeof SystemType]


export const UserRole: {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  ANALYST: 'ANALYST',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type AgentStatus = $Enums.AgentStatus

export const AgentStatus: typeof $Enums.AgentStatus

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type OperationStatus = $Enums.OperationStatus

export const OperationStatus: typeof $Enums.OperationStatus

export type PriorityLevel = $Enums.PriorityLevel

export const PriorityLevel: typeof $Enums.PriorityLevel

export type ClassificationLevel = $Enums.ClassificationLevel

export const ClassificationLevel: typeof $Enums.ClassificationLevel

export type IntelligenceSource = $Enums.IntelligenceSource

export const IntelligenceSource: typeof $Enums.IntelligenceSource

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type SystemStatus = $Enums.SystemStatus

export const SystemStatus: typeof $Enums.SystemStatus

export type SystemType = $Enums.SystemType

export const SystemType: typeof $Enums.SystemType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agent.findMany()
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
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
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
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentActivity`: Exposes CRUD operations for the **AgentActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentActivities
    * const agentActivities = await prisma.agentActivity.findMany()
    * ```
    */
  get agentActivity(): Prisma.AgentActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intelligenceReport`: Exposes CRUD operations for the **IntelligenceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntelligenceReports
    * const intelligenceReports = await prisma.intelligenceReport.findMany()
    * ```
    */
  get intelligenceReport(): Prisma.IntelligenceReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentOperation`: Exposes CRUD operations for the **AgentOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentOperations
    * const agentOperations = await prisma.agentOperation.findMany()
    * ```
    */
  get agentOperation(): Prisma.AgentOperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.system`: Exposes CRUD operations for the **System** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Systems
    * const systems = await prisma.system.findMany()
    * ```
    */
  get system(): Prisma.SystemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Agent: 'Agent',
    AgentActivity: 'AgentActivity',
    IntelligenceReport: 'IntelligenceReport',
    Operation: 'Operation',
    AgentOperation: 'AgentOperation',
    System: 'System',
    User: 'User',
    Session: 'Session'
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
      modelProps: "agent" | "agentActivity" | "intelligenceReport" | "operation" | "agentOperation" | "system" | "user" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      AgentActivity: {
        payload: Prisma.$AgentActivityPayload<ExtArgs>
        fields: Prisma.AgentActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          findFirst: {
            args: Prisma.AgentActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          findMany: {
            args: Prisma.AgentActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>[]
          }
          create: {
            args: Prisma.AgentActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          createMany: {
            args: Prisma.AgentActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>[]
          }
          delete: {
            args: Prisma.AgentActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          update: {
            args: Prisma.AgentActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          deleteMany: {
            args: Prisma.AgentActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>[]
          }
          upsert: {
            args: Prisma.AgentActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentActivityPayload>
          }
          aggregate: {
            args: Prisma.AgentActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentActivity>
          }
          groupBy: {
            args: Prisma.AgentActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentActivityCountArgs<ExtArgs>
            result: $Utils.Optional<AgentActivityCountAggregateOutputType> | number
          }
        }
      }
      IntelligenceReport: {
        payload: Prisma.$IntelligenceReportPayload<ExtArgs>
        fields: Prisma.IntelligenceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntelligenceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntelligenceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          findFirst: {
            args: Prisma.IntelligenceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntelligenceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          findMany: {
            args: Prisma.IntelligenceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>[]
          }
          create: {
            args: Prisma.IntelligenceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          createMany: {
            args: Prisma.IntelligenceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntelligenceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>[]
          }
          delete: {
            args: Prisma.IntelligenceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          update: {
            args: Prisma.IntelligenceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          deleteMany: {
            args: Prisma.IntelligenceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntelligenceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntelligenceReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>[]
          }
          upsert: {
            args: Prisma.IntelligenceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntelligenceReportPayload>
          }
          aggregate: {
            args: Prisma.IntelligenceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntelligenceReport>
          }
          groupBy: {
            args: Prisma.IntelligenceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntelligenceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntelligenceReportCountArgs<ExtArgs>
            result: $Utils.Optional<IntelligenceReportCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
      AgentOperation: {
        payload: Prisma.$AgentOperationPayload<ExtArgs>
        fields: Prisma.AgentOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          findFirst: {
            args: Prisma.AgentOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          findMany: {
            args: Prisma.AgentOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>[]
          }
          create: {
            args: Prisma.AgentOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          createMany: {
            args: Prisma.AgentOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>[]
          }
          delete: {
            args: Prisma.AgentOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          update: {
            args: Prisma.AgentOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          deleteMany: {
            args: Prisma.AgentOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentOperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>[]
          }
          upsert: {
            args: Prisma.AgentOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentOperationPayload>
          }
          aggregate: {
            args: Prisma.AgentOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentOperation>
          }
          groupBy: {
            args: Prisma.AgentOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentOperationCountArgs<ExtArgs>
            result: $Utils.Optional<AgentOperationCountAggregateOutputType> | number
          }
        }
      }
      System: {
        payload: Prisma.$SystemPayload<ExtArgs>
        fields: Prisma.SystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findFirst: {
            args: Prisma.SystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findMany: {
            args: Prisma.SystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          create: {
            args: Prisma.SystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          createMany: {
            args: Prisma.SystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          delete: {
            args: Prisma.SystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          update: {
            args: Prisma.SystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          deleteMany: {
            args: Prisma.SystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          upsert: {
            args: Prisma.SystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          aggregate: {
            args: Prisma.SystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem>
          }
          groupBy: {
            args: Prisma.SystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemCountArgs<ExtArgs>
            result: $Utils.Optional<SystemCountAggregateOutputType> | number
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
    agent?: AgentOmit
    agentActivity?: AgentActivityOmit
    intelligenceReport?: IntelligenceReportOmit
    operation?: OperationOmit
    agentOperation?: AgentOperationOmit
    system?: SystemOmit
    user?: UserOmit
    session?: SessionOmit
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
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    operations: number
    activities: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations?: boolean | AgentCountOutputTypeCountOperationsArgs
    activities?: boolean | AgentCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentOperationWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentActivityWhereInput
  }


  /**
   * Count Type OperationCountOutputType
   */

  export type OperationCountOutputType = {
    agents: number
  }

  export type OperationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | OperationCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationCountOutputType
     */
    select?: OperationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentOperationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    missionsCompleted: number | null
  }

  export type AgentSumAggregateOutputType = {
    missionsCompleted: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    codename: string | null
    status: $Enums.AgentStatus | null
    riskLevel: $Enums.RiskLevel | null
    location: string | null
    lastSeen: Date | null
    missionsCompleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    codename: string | null
    status: $Enums.AgentStatus | null
    riskLevel: $Enums.RiskLevel | null
    location: string | null
    lastSeen: Date | null
    missionsCompleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    codename: number
    status: number
    riskLevel: number
    location: number
    lastSeen: number
    missionsCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    missionsCompleted?: true
  }

  export type AgentSumAggregateInputType = {
    missionsCompleted?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    codename?: true
    status?: true
    riskLevel?: true
    location?: true
    lastSeen?: true
    missionsCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    codename?: true
    status?: true
    riskLevel?: true
    location?: true
    lastSeen?: true
    missionsCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    codename?: true
    status?: true
    riskLevel?: true
    location?: true
    lastSeen?: true
    missionsCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    codename: string
    status: $Enums.AgentStatus
    riskLevel: $Enums.RiskLevel
    location: string | null
    lastSeen: Date | null
    missionsCompleted: number
    createdAt: Date
    updatedAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codename?: boolean
    status?: boolean
    riskLevel?: boolean
    location?: boolean
    lastSeen?: boolean
    missionsCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operations?: boolean | Agent$operationsArgs<ExtArgs>
    activities?: boolean | Agent$activitiesArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codename?: boolean
    status?: boolean
    riskLevel?: boolean
    location?: boolean
    lastSeen?: boolean
    missionsCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codename?: boolean
    status?: boolean
    riskLevel?: boolean
    location?: boolean
    lastSeen?: boolean
    missionsCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    codename?: boolean
    status?: boolean
    riskLevel?: boolean
    location?: boolean
    lastSeen?: boolean
    missionsCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codename" | "status" | "riskLevel" | "location" | "lastSeen" | "missionsCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations?: boolean | Agent$operationsArgs<ExtArgs>
    activities?: boolean | Agent$activitiesArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      operations: Prisma.$AgentOperationPayload<ExtArgs>[]
      activities: Prisma.$AgentActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codename: string
      status: $Enums.AgentStatus
      riskLevel: $Enums.RiskLevel
      location: string | null
      lastSeen: Date | null
      missionsCompleted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operations<T extends Agent$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Agent$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Agent$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly codename: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'AgentStatus'>
    readonly riskLevel: FieldRef<"Agent", 'RiskLevel'>
    readonly location: FieldRef<"Agent", 'String'>
    readonly lastSeen: FieldRef<"Agent", 'DateTime'>
    readonly missionsCompleted: FieldRef<"Agent", 'Int'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.operations
   */
  export type Agent$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    where?: AgentOperationWhereInput
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    cursor?: AgentOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentOperationScalarFieldEnum | AgentOperationScalarFieldEnum[]
  }

  /**
   * Agent.activities
   */
  export type Agent$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    where?: AgentActivityWhereInput
    orderBy?: AgentActivityOrderByWithRelationInput | AgentActivityOrderByWithRelationInput[]
    cursor?: AgentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentActivityScalarFieldEnum | AgentActivityScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model AgentActivity
   */

  export type AggregateAgentActivity = {
    _count: AgentActivityCountAggregateOutputType | null
    _min: AgentActivityMinAggregateOutputType | null
    _max: AgentActivityMaxAggregateOutputType | null
  }

  export type AgentActivityMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    action: string | null
    location: string | null
    timestamp: Date | null
    details: string | null
  }

  export type AgentActivityMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    action: string | null
    location: string | null
    timestamp: Date | null
    details: string | null
  }

  export type AgentActivityCountAggregateOutputType = {
    id: number
    agentId: number
    action: number
    location: number
    timestamp: number
    details: number
    _all: number
  }


  export type AgentActivityMinAggregateInputType = {
    id?: true
    agentId?: true
    action?: true
    location?: true
    timestamp?: true
    details?: true
  }

  export type AgentActivityMaxAggregateInputType = {
    id?: true
    agentId?: true
    action?: true
    location?: true
    timestamp?: true
    details?: true
  }

  export type AgentActivityCountAggregateInputType = {
    id?: true
    agentId?: true
    action?: true
    location?: true
    timestamp?: true
    details?: true
    _all?: true
  }

  export type AgentActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentActivity to aggregate.
     */
    where?: AgentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentActivities to fetch.
     */
    orderBy?: AgentActivityOrderByWithRelationInput | AgentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentActivities
    **/
    _count?: true | AgentActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentActivityMaxAggregateInputType
  }

  export type GetAgentActivityAggregateType<T extends AgentActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentActivity[P]>
      : GetScalarType<T[P], AggregateAgentActivity[P]>
  }




  export type AgentActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentActivityWhereInput
    orderBy?: AgentActivityOrderByWithAggregationInput | AgentActivityOrderByWithAggregationInput[]
    by: AgentActivityScalarFieldEnum[] | AgentActivityScalarFieldEnum
    having?: AgentActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentActivityCountAggregateInputType | true
    _min?: AgentActivityMinAggregateInputType
    _max?: AgentActivityMaxAggregateInputType
  }

  export type AgentActivityGroupByOutputType = {
    id: string
    agentId: string
    action: string
    location: string | null
    timestamp: Date
    details: string | null
    _count: AgentActivityCountAggregateOutputType | null
    _min: AgentActivityMinAggregateOutputType | null
    _max: AgentActivityMaxAggregateOutputType | null
  }

  type GetAgentActivityGroupByPayload<T extends AgentActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentActivityGroupByOutputType[P]>
            : GetScalarType<T[P], AgentActivityGroupByOutputType[P]>
        }
      >
    >


  export type AgentActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    action?: boolean
    location?: boolean
    timestamp?: boolean
    details?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentActivity"]>

  export type AgentActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    action?: boolean
    location?: boolean
    timestamp?: boolean
    details?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentActivity"]>

  export type AgentActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    action?: boolean
    location?: boolean
    timestamp?: boolean
    details?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentActivity"]>

  export type AgentActivitySelectScalar = {
    id?: boolean
    agentId?: boolean
    action?: boolean
    location?: boolean
    timestamp?: boolean
    details?: boolean
  }

  export type AgentActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "action" | "location" | "timestamp" | "details", ExtArgs["result"]["agentActivity"]>
  export type AgentActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type AgentActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type AgentActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $AgentActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentActivity"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      action: string
      location: string | null
      timestamp: Date
      details: string | null
    }, ExtArgs["result"]["agentActivity"]>
    composites: {}
  }

  type AgentActivityGetPayload<S extends boolean | null | undefined | AgentActivityDefaultArgs> = $Result.GetResult<Prisma.$AgentActivityPayload, S>

  type AgentActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentActivityCountAggregateInputType | true
    }

  export interface AgentActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentActivity'], meta: { name: 'AgentActivity' } }
    /**
     * Find zero or one AgentActivity that matches the filter.
     * @param {AgentActivityFindUniqueArgs} args - Arguments to find a AgentActivity
     * @example
     * // Get one AgentActivity
     * const agentActivity = await prisma.agentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentActivityFindUniqueArgs>(args: SelectSubset<T, AgentActivityFindUniqueArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentActivityFindUniqueOrThrowArgs} args - Arguments to find a AgentActivity
     * @example
     * // Get one AgentActivity
     * const agentActivity = await prisma.agentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityFindFirstArgs} args - Arguments to find a AgentActivity
     * @example
     * // Get one AgentActivity
     * const agentActivity = await prisma.agentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentActivityFindFirstArgs>(args?: SelectSubset<T, AgentActivityFindFirstArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityFindFirstOrThrowArgs} args - Arguments to find a AgentActivity
     * @example
     * // Get one AgentActivity
     * const agentActivity = await prisma.agentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentActivities
     * const agentActivities = await prisma.agentActivity.findMany()
     * 
     * // Get first 10 AgentActivities
     * const agentActivities = await prisma.agentActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentActivityWithIdOnly = await prisma.agentActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentActivityFindManyArgs>(args?: SelectSubset<T, AgentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentActivity.
     * @param {AgentActivityCreateArgs} args - Arguments to create a AgentActivity.
     * @example
     * // Create one AgentActivity
     * const AgentActivity = await prisma.agentActivity.create({
     *   data: {
     *     // ... data to create a AgentActivity
     *   }
     * })
     * 
     */
    create<T extends AgentActivityCreateArgs>(args: SelectSubset<T, AgentActivityCreateArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentActivities.
     * @param {AgentActivityCreateManyArgs} args - Arguments to create many AgentActivities.
     * @example
     * // Create many AgentActivities
     * const agentActivity = await prisma.agentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentActivityCreateManyArgs>(args?: SelectSubset<T, AgentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentActivities and returns the data saved in the database.
     * @param {AgentActivityCreateManyAndReturnArgs} args - Arguments to create many AgentActivities.
     * @example
     * // Create many AgentActivities
     * const agentActivity = await prisma.agentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentActivities and only return the `id`
     * const agentActivityWithIdOnly = await prisma.agentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentActivity.
     * @param {AgentActivityDeleteArgs} args - Arguments to delete one AgentActivity.
     * @example
     * // Delete one AgentActivity
     * const AgentActivity = await prisma.agentActivity.delete({
     *   where: {
     *     // ... filter to delete one AgentActivity
     *   }
     * })
     * 
     */
    delete<T extends AgentActivityDeleteArgs>(args: SelectSubset<T, AgentActivityDeleteArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentActivity.
     * @param {AgentActivityUpdateArgs} args - Arguments to update one AgentActivity.
     * @example
     * // Update one AgentActivity
     * const agentActivity = await prisma.agentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentActivityUpdateArgs>(args: SelectSubset<T, AgentActivityUpdateArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentActivities.
     * @param {AgentActivityDeleteManyArgs} args - Arguments to filter AgentActivities to delete.
     * @example
     * // Delete a few AgentActivities
     * const { count } = await prisma.agentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentActivityDeleteManyArgs>(args?: SelectSubset<T, AgentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentActivities
     * const agentActivity = await prisma.agentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentActivityUpdateManyArgs>(args: SelectSubset<T, AgentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentActivities and returns the data updated in the database.
     * @param {AgentActivityUpdateManyAndReturnArgs} args - Arguments to update many AgentActivities.
     * @example
     * // Update many AgentActivities
     * const agentActivity = await prisma.agentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentActivities and only return the `id`
     * const agentActivityWithIdOnly = await prisma.agentActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentActivity.
     * @param {AgentActivityUpsertArgs} args - Arguments to update or create a AgentActivity.
     * @example
     * // Update or create a AgentActivity
     * const agentActivity = await prisma.agentActivity.upsert({
     *   create: {
     *     // ... data to create a AgentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentActivity we want to update
     *   }
     * })
     */
    upsert<T extends AgentActivityUpsertArgs>(args: SelectSubset<T, AgentActivityUpsertArgs<ExtArgs>>): Prisma__AgentActivityClient<$Result.GetResult<Prisma.$AgentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityCountArgs} args - Arguments to filter AgentActivities to count.
     * @example
     * // Count the number of AgentActivities
     * const count = await prisma.agentActivity.count({
     *   where: {
     *     // ... the filter for the AgentActivities we want to count
     *   }
     * })
    **/
    count<T extends AgentActivityCountArgs>(
      args?: Subset<T, AgentActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentActivityAggregateArgs>(args: Subset<T, AgentActivityAggregateArgs>): Prisma.PrismaPromise<GetAgentActivityAggregateType<T>>

    /**
     * Group by AgentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentActivityGroupByArgs} args - Group by arguments.
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
      T extends AgentActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentActivityGroupByArgs['orderBy'] }
        : { orderBy?: AgentActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentActivity model
   */
  readonly fields: AgentActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgentActivity model
   */
  interface AgentActivityFieldRefs {
    readonly id: FieldRef<"AgentActivity", 'String'>
    readonly agentId: FieldRef<"AgentActivity", 'String'>
    readonly action: FieldRef<"AgentActivity", 'String'>
    readonly location: FieldRef<"AgentActivity", 'String'>
    readonly timestamp: FieldRef<"AgentActivity", 'DateTime'>
    readonly details: FieldRef<"AgentActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgentActivity findUnique
   */
  export type AgentActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter, which AgentActivity to fetch.
     */
    where: AgentActivityWhereUniqueInput
  }

  /**
   * AgentActivity findUniqueOrThrow
   */
  export type AgentActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter, which AgentActivity to fetch.
     */
    where: AgentActivityWhereUniqueInput
  }

  /**
   * AgentActivity findFirst
   */
  export type AgentActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter, which AgentActivity to fetch.
     */
    where?: AgentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentActivities to fetch.
     */
    orderBy?: AgentActivityOrderByWithRelationInput | AgentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentActivities.
     */
    cursor?: AgentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentActivities.
     */
    distinct?: AgentActivityScalarFieldEnum | AgentActivityScalarFieldEnum[]
  }

  /**
   * AgentActivity findFirstOrThrow
   */
  export type AgentActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter, which AgentActivity to fetch.
     */
    where?: AgentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentActivities to fetch.
     */
    orderBy?: AgentActivityOrderByWithRelationInput | AgentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentActivities.
     */
    cursor?: AgentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentActivities.
     */
    distinct?: AgentActivityScalarFieldEnum | AgentActivityScalarFieldEnum[]
  }

  /**
   * AgentActivity findMany
   */
  export type AgentActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter, which AgentActivities to fetch.
     */
    where?: AgentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentActivities to fetch.
     */
    orderBy?: AgentActivityOrderByWithRelationInput | AgentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentActivities.
     */
    cursor?: AgentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentActivities.
     */
    skip?: number
    distinct?: AgentActivityScalarFieldEnum | AgentActivityScalarFieldEnum[]
  }

  /**
   * AgentActivity create
   */
  export type AgentActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentActivity.
     */
    data: XOR<AgentActivityCreateInput, AgentActivityUncheckedCreateInput>
  }

  /**
   * AgentActivity createMany
   */
  export type AgentActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentActivities.
     */
    data: AgentActivityCreateManyInput | AgentActivityCreateManyInput[]
  }

  /**
   * AgentActivity createManyAndReturn
   */
  export type AgentActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * The data used to create many AgentActivities.
     */
    data: AgentActivityCreateManyInput | AgentActivityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentActivity update
   */
  export type AgentActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentActivity.
     */
    data: XOR<AgentActivityUpdateInput, AgentActivityUncheckedUpdateInput>
    /**
     * Choose, which AgentActivity to update.
     */
    where: AgentActivityWhereUniqueInput
  }

  /**
   * AgentActivity updateMany
   */
  export type AgentActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentActivities.
     */
    data: XOR<AgentActivityUpdateManyMutationInput, AgentActivityUncheckedUpdateManyInput>
    /**
     * Filter which AgentActivities to update
     */
    where?: AgentActivityWhereInput
    /**
     * Limit how many AgentActivities to update.
     */
    limit?: number
  }

  /**
   * AgentActivity updateManyAndReturn
   */
  export type AgentActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * The data used to update AgentActivities.
     */
    data: XOR<AgentActivityUpdateManyMutationInput, AgentActivityUncheckedUpdateManyInput>
    /**
     * Filter which AgentActivities to update
     */
    where?: AgentActivityWhereInput
    /**
     * Limit how many AgentActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentActivity upsert
   */
  export type AgentActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentActivity to update in case it exists.
     */
    where: AgentActivityWhereUniqueInput
    /**
     * In case the AgentActivity found by the `where` argument doesn't exist, create a new AgentActivity with this data.
     */
    create: XOR<AgentActivityCreateInput, AgentActivityUncheckedCreateInput>
    /**
     * In case the AgentActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentActivityUpdateInput, AgentActivityUncheckedUpdateInput>
  }

  /**
   * AgentActivity delete
   */
  export type AgentActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
    /**
     * Filter which AgentActivity to delete.
     */
    where: AgentActivityWhereUniqueInput
  }

  /**
   * AgentActivity deleteMany
   */
  export type AgentActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentActivities to delete
     */
    where?: AgentActivityWhereInput
    /**
     * Limit how many AgentActivities to delete.
     */
    limit?: number
  }

  /**
   * AgentActivity without action
   */
  export type AgentActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentActivity
     */
    select?: AgentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentActivity
     */
    omit?: AgentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentActivityInclude<ExtArgs> | null
  }


  /**
   * Model IntelligenceReport
   */

  export type AggregateIntelligenceReport = {
    _count: IntelligenceReportCountAggregateOutputType | null
    _min: IntelligenceReportMinAggregateOutputType | null
    _max: IntelligenceReportMaxAggregateOutputType | null
  }

  export type IntelligenceReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    classification: $Enums.ClassificationLevel | null
    source: $Enums.IntelligenceSource | null
    location: string | null
    threatLevel: $Enums.RiskLevel | null
    status: $Enums.ReportStatus | null
    content: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntelligenceReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    classification: $Enums.ClassificationLevel | null
    source: $Enums.IntelligenceSource | null
    location: string | null
    threatLevel: $Enums.RiskLevel | null
    status: $Enums.ReportStatus | null
    content: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntelligenceReportCountAggregateOutputType = {
    id: number
    title: number
    classification: number
    source: number
    location: number
    threatLevel: number
    status: number
    content: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntelligenceReportMinAggregateInputType = {
    id?: true
    title?: true
    classification?: true
    source?: true
    location?: true
    threatLevel?: true
    status?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntelligenceReportMaxAggregateInputType = {
    id?: true
    title?: true
    classification?: true
    source?: true
    location?: true
    threatLevel?: true
    status?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntelligenceReportCountAggregateInputType = {
    id?: true
    title?: true
    classification?: true
    source?: true
    location?: true
    threatLevel?: true
    status?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntelligenceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntelligenceReport to aggregate.
     */
    where?: IntelligenceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntelligenceReports to fetch.
     */
    orderBy?: IntelligenceReportOrderByWithRelationInput | IntelligenceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntelligenceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntelligenceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntelligenceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntelligenceReports
    **/
    _count?: true | IntelligenceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntelligenceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntelligenceReportMaxAggregateInputType
  }

  export type GetIntelligenceReportAggregateType<T extends IntelligenceReportAggregateArgs> = {
        [P in keyof T & keyof AggregateIntelligenceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntelligenceReport[P]>
      : GetScalarType<T[P], AggregateIntelligenceReport[P]>
  }




  export type IntelligenceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntelligenceReportWhereInput
    orderBy?: IntelligenceReportOrderByWithAggregationInput | IntelligenceReportOrderByWithAggregationInput[]
    by: IntelligenceReportScalarFieldEnum[] | IntelligenceReportScalarFieldEnum
    having?: IntelligenceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntelligenceReportCountAggregateInputType | true
    _min?: IntelligenceReportMinAggregateInputType
    _max?: IntelligenceReportMaxAggregateInputType
  }

  export type IntelligenceReportGroupByOutputType = {
    id: string
    title: string
    classification: $Enums.ClassificationLevel
    source: $Enums.IntelligenceSource
    location: string | null
    threatLevel: $Enums.RiskLevel
    status: $Enums.ReportStatus
    content: string
    tags: string
    createdAt: Date
    updatedAt: Date
    _count: IntelligenceReportCountAggregateOutputType | null
    _min: IntelligenceReportMinAggregateOutputType | null
    _max: IntelligenceReportMaxAggregateOutputType | null
  }

  type GetIntelligenceReportGroupByPayload<T extends IntelligenceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntelligenceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntelligenceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntelligenceReportGroupByOutputType[P]>
            : GetScalarType<T[P], IntelligenceReportGroupByOutputType[P]>
        }
      >
    >


  export type IntelligenceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    classification?: boolean
    source?: boolean
    location?: boolean
    threatLevel?: boolean
    status?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intelligenceReport"]>

  export type IntelligenceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    classification?: boolean
    source?: boolean
    location?: boolean
    threatLevel?: boolean
    status?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intelligenceReport"]>

  export type IntelligenceReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    classification?: boolean
    source?: boolean
    location?: boolean
    threatLevel?: boolean
    status?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intelligenceReport"]>

  export type IntelligenceReportSelectScalar = {
    id?: boolean
    title?: boolean
    classification?: boolean
    source?: boolean
    location?: boolean
    threatLevel?: boolean
    status?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntelligenceReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "classification" | "source" | "location" | "threatLevel" | "status" | "content" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["intelligenceReport"]>

  export type $IntelligenceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntelligenceReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      classification: $Enums.ClassificationLevel
      source: $Enums.IntelligenceSource
      location: string | null
      threatLevel: $Enums.RiskLevel
      status: $Enums.ReportStatus
      content: string
      tags: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intelligenceReport"]>
    composites: {}
  }

  type IntelligenceReportGetPayload<S extends boolean | null | undefined | IntelligenceReportDefaultArgs> = $Result.GetResult<Prisma.$IntelligenceReportPayload, S>

  type IntelligenceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntelligenceReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntelligenceReportCountAggregateInputType | true
    }

  export interface IntelligenceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntelligenceReport'], meta: { name: 'IntelligenceReport' } }
    /**
     * Find zero or one IntelligenceReport that matches the filter.
     * @param {IntelligenceReportFindUniqueArgs} args - Arguments to find a IntelligenceReport
     * @example
     * // Get one IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntelligenceReportFindUniqueArgs>(args: SelectSubset<T, IntelligenceReportFindUniqueArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntelligenceReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntelligenceReportFindUniqueOrThrowArgs} args - Arguments to find a IntelligenceReport
     * @example
     * // Get one IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntelligenceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, IntelligenceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntelligenceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportFindFirstArgs} args - Arguments to find a IntelligenceReport
     * @example
     * // Get one IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntelligenceReportFindFirstArgs>(args?: SelectSubset<T, IntelligenceReportFindFirstArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntelligenceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportFindFirstOrThrowArgs} args - Arguments to find a IntelligenceReport
     * @example
     * // Get one IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntelligenceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, IntelligenceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntelligenceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntelligenceReports
     * const intelligenceReports = await prisma.intelligenceReport.findMany()
     * 
     * // Get first 10 IntelligenceReports
     * const intelligenceReports = await prisma.intelligenceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intelligenceReportWithIdOnly = await prisma.intelligenceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntelligenceReportFindManyArgs>(args?: SelectSubset<T, IntelligenceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntelligenceReport.
     * @param {IntelligenceReportCreateArgs} args - Arguments to create a IntelligenceReport.
     * @example
     * // Create one IntelligenceReport
     * const IntelligenceReport = await prisma.intelligenceReport.create({
     *   data: {
     *     // ... data to create a IntelligenceReport
     *   }
     * })
     * 
     */
    create<T extends IntelligenceReportCreateArgs>(args: SelectSubset<T, IntelligenceReportCreateArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntelligenceReports.
     * @param {IntelligenceReportCreateManyArgs} args - Arguments to create many IntelligenceReports.
     * @example
     * // Create many IntelligenceReports
     * const intelligenceReport = await prisma.intelligenceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntelligenceReportCreateManyArgs>(args?: SelectSubset<T, IntelligenceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntelligenceReports and returns the data saved in the database.
     * @param {IntelligenceReportCreateManyAndReturnArgs} args - Arguments to create many IntelligenceReports.
     * @example
     * // Create many IntelligenceReports
     * const intelligenceReport = await prisma.intelligenceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntelligenceReports and only return the `id`
     * const intelligenceReportWithIdOnly = await prisma.intelligenceReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntelligenceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, IntelligenceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntelligenceReport.
     * @param {IntelligenceReportDeleteArgs} args - Arguments to delete one IntelligenceReport.
     * @example
     * // Delete one IntelligenceReport
     * const IntelligenceReport = await prisma.intelligenceReport.delete({
     *   where: {
     *     // ... filter to delete one IntelligenceReport
     *   }
     * })
     * 
     */
    delete<T extends IntelligenceReportDeleteArgs>(args: SelectSubset<T, IntelligenceReportDeleteArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntelligenceReport.
     * @param {IntelligenceReportUpdateArgs} args - Arguments to update one IntelligenceReport.
     * @example
     * // Update one IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntelligenceReportUpdateArgs>(args: SelectSubset<T, IntelligenceReportUpdateArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntelligenceReports.
     * @param {IntelligenceReportDeleteManyArgs} args - Arguments to filter IntelligenceReports to delete.
     * @example
     * // Delete a few IntelligenceReports
     * const { count } = await prisma.intelligenceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntelligenceReportDeleteManyArgs>(args?: SelectSubset<T, IntelligenceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntelligenceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntelligenceReports
     * const intelligenceReport = await prisma.intelligenceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntelligenceReportUpdateManyArgs>(args: SelectSubset<T, IntelligenceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntelligenceReports and returns the data updated in the database.
     * @param {IntelligenceReportUpdateManyAndReturnArgs} args - Arguments to update many IntelligenceReports.
     * @example
     * // Update many IntelligenceReports
     * const intelligenceReport = await prisma.intelligenceReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntelligenceReports and only return the `id`
     * const intelligenceReportWithIdOnly = await prisma.intelligenceReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntelligenceReportUpdateManyAndReturnArgs>(args: SelectSubset<T, IntelligenceReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntelligenceReport.
     * @param {IntelligenceReportUpsertArgs} args - Arguments to update or create a IntelligenceReport.
     * @example
     * // Update or create a IntelligenceReport
     * const intelligenceReport = await prisma.intelligenceReport.upsert({
     *   create: {
     *     // ... data to create a IntelligenceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntelligenceReport we want to update
     *   }
     * })
     */
    upsert<T extends IntelligenceReportUpsertArgs>(args: SelectSubset<T, IntelligenceReportUpsertArgs<ExtArgs>>): Prisma__IntelligenceReportClient<$Result.GetResult<Prisma.$IntelligenceReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntelligenceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportCountArgs} args - Arguments to filter IntelligenceReports to count.
     * @example
     * // Count the number of IntelligenceReports
     * const count = await prisma.intelligenceReport.count({
     *   where: {
     *     // ... the filter for the IntelligenceReports we want to count
     *   }
     * })
    **/
    count<T extends IntelligenceReportCountArgs>(
      args?: Subset<T, IntelligenceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntelligenceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntelligenceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntelligenceReportAggregateArgs>(args: Subset<T, IntelligenceReportAggregateArgs>): Prisma.PrismaPromise<GetIntelligenceReportAggregateType<T>>

    /**
     * Group by IntelligenceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntelligenceReportGroupByArgs} args - Group by arguments.
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
      T extends IntelligenceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntelligenceReportGroupByArgs['orderBy'] }
        : { orderBy?: IntelligenceReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntelligenceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntelligenceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntelligenceReport model
   */
  readonly fields: IntelligenceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntelligenceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntelligenceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IntelligenceReport model
   */
  interface IntelligenceReportFieldRefs {
    readonly id: FieldRef<"IntelligenceReport", 'String'>
    readonly title: FieldRef<"IntelligenceReport", 'String'>
    readonly classification: FieldRef<"IntelligenceReport", 'ClassificationLevel'>
    readonly source: FieldRef<"IntelligenceReport", 'IntelligenceSource'>
    readonly location: FieldRef<"IntelligenceReport", 'String'>
    readonly threatLevel: FieldRef<"IntelligenceReport", 'RiskLevel'>
    readonly status: FieldRef<"IntelligenceReport", 'ReportStatus'>
    readonly content: FieldRef<"IntelligenceReport", 'String'>
    readonly tags: FieldRef<"IntelligenceReport", 'String'>
    readonly createdAt: FieldRef<"IntelligenceReport", 'DateTime'>
    readonly updatedAt: FieldRef<"IntelligenceReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntelligenceReport findUnique
   */
  export type IntelligenceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter, which IntelligenceReport to fetch.
     */
    where: IntelligenceReportWhereUniqueInput
  }

  /**
   * IntelligenceReport findUniqueOrThrow
   */
  export type IntelligenceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter, which IntelligenceReport to fetch.
     */
    where: IntelligenceReportWhereUniqueInput
  }

  /**
   * IntelligenceReport findFirst
   */
  export type IntelligenceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter, which IntelligenceReport to fetch.
     */
    where?: IntelligenceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntelligenceReports to fetch.
     */
    orderBy?: IntelligenceReportOrderByWithRelationInput | IntelligenceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntelligenceReports.
     */
    cursor?: IntelligenceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntelligenceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntelligenceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntelligenceReports.
     */
    distinct?: IntelligenceReportScalarFieldEnum | IntelligenceReportScalarFieldEnum[]
  }

  /**
   * IntelligenceReport findFirstOrThrow
   */
  export type IntelligenceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter, which IntelligenceReport to fetch.
     */
    where?: IntelligenceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntelligenceReports to fetch.
     */
    orderBy?: IntelligenceReportOrderByWithRelationInput | IntelligenceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntelligenceReports.
     */
    cursor?: IntelligenceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntelligenceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntelligenceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntelligenceReports.
     */
    distinct?: IntelligenceReportScalarFieldEnum | IntelligenceReportScalarFieldEnum[]
  }

  /**
   * IntelligenceReport findMany
   */
  export type IntelligenceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter, which IntelligenceReports to fetch.
     */
    where?: IntelligenceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntelligenceReports to fetch.
     */
    orderBy?: IntelligenceReportOrderByWithRelationInput | IntelligenceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntelligenceReports.
     */
    cursor?: IntelligenceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntelligenceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntelligenceReports.
     */
    skip?: number
    distinct?: IntelligenceReportScalarFieldEnum | IntelligenceReportScalarFieldEnum[]
  }

  /**
   * IntelligenceReport create
   */
  export type IntelligenceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * The data needed to create a IntelligenceReport.
     */
    data: XOR<IntelligenceReportCreateInput, IntelligenceReportUncheckedCreateInput>
  }

  /**
   * IntelligenceReport createMany
   */
  export type IntelligenceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntelligenceReports.
     */
    data: IntelligenceReportCreateManyInput | IntelligenceReportCreateManyInput[]
  }

  /**
   * IntelligenceReport createManyAndReturn
   */
  export type IntelligenceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * The data used to create many IntelligenceReports.
     */
    data: IntelligenceReportCreateManyInput | IntelligenceReportCreateManyInput[]
  }

  /**
   * IntelligenceReport update
   */
  export type IntelligenceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * The data needed to update a IntelligenceReport.
     */
    data: XOR<IntelligenceReportUpdateInput, IntelligenceReportUncheckedUpdateInput>
    /**
     * Choose, which IntelligenceReport to update.
     */
    where: IntelligenceReportWhereUniqueInput
  }

  /**
   * IntelligenceReport updateMany
   */
  export type IntelligenceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntelligenceReports.
     */
    data: XOR<IntelligenceReportUpdateManyMutationInput, IntelligenceReportUncheckedUpdateManyInput>
    /**
     * Filter which IntelligenceReports to update
     */
    where?: IntelligenceReportWhereInput
    /**
     * Limit how many IntelligenceReports to update.
     */
    limit?: number
  }

  /**
   * IntelligenceReport updateManyAndReturn
   */
  export type IntelligenceReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * The data used to update IntelligenceReports.
     */
    data: XOR<IntelligenceReportUpdateManyMutationInput, IntelligenceReportUncheckedUpdateManyInput>
    /**
     * Filter which IntelligenceReports to update
     */
    where?: IntelligenceReportWhereInput
    /**
     * Limit how many IntelligenceReports to update.
     */
    limit?: number
  }

  /**
   * IntelligenceReport upsert
   */
  export type IntelligenceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * The filter to search for the IntelligenceReport to update in case it exists.
     */
    where: IntelligenceReportWhereUniqueInput
    /**
     * In case the IntelligenceReport found by the `where` argument doesn't exist, create a new IntelligenceReport with this data.
     */
    create: XOR<IntelligenceReportCreateInput, IntelligenceReportUncheckedCreateInput>
    /**
     * In case the IntelligenceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntelligenceReportUpdateInput, IntelligenceReportUncheckedUpdateInput>
  }

  /**
   * IntelligenceReport delete
   */
  export type IntelligenceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
    /**
     * Filter which IntelligenceReport to delete.
     */
    where: IntelligenceReportWhereUniqueInput
  }

  /**
   * IntelligenceReport deleteMany
   */
  export type IntelligenceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntelligenceReports to delete
     */
    where?: IntelligenceReportWhereInput
    /**
     * Limit how many IntelligenceReports to delete.
     */
    limit?: number
  }

  /**
   * IntelligenceReport without action
   */
  export type IntelligenceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntelligenceReport
     */
    select?: IntelligenceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntelligenceReport
     */
    omit?: IntelligenceReportOmit<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationAvgAggregateOutputType = {
    progress: number | null
  }

  export type OperationSumAggregateOutputType = {
    progress: number | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.OperationStatus | null
    priority: $Enums.PriorityLevel | null
    location: string | null
    progress: number | null
    objectives: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.OperationStatus | null
    priority: $Enums.PriorityLevel | null
    location: string | null
    progress: number | null
    objectives: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    name: number
    status: number
    priority: number
    location: number
    progress: number
    objectives: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperationAvgAggregateInputType = {
    progress?: true
  }

  export type OperationSumAggregateInputType = {
    progress?: true
  }

  export type OperationMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    priority?: true
    location?: true
    progress?: true
    objectives?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    priority?: true
    location?: true
    progress?: true
    objectives?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    priority?: true
    location?: true
    progress?: true
    objectives?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _avg?: OperationAvgAggregateInputType
    _sum?: OperationSumAggregateInputType
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    name: string
    status: $Enums.OperationStatus
    priority: $Enums.PriorityLevel
    location: string
    progress: number
    objectives: string
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    priority?: boolean
    location?: boolean
    progress?: boolean
    objectives?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agents?: boolean | Operation$agentsArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    priority?: boolean
    location?: boolean
    progress?: boolean
    objectives?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    priority?: boolean
    location?: boolean
    progress?: boolean
    objectives?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    priority?: boolean
    location?: boolean
    progress?: boolean
    objectives?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "priority" | "location" | "progress" | "objectives" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["operation"]>
  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | Operation$agentsArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      agents: Prisma.$AgentOperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.OperationStatus
      priority: $Enums.PriorityLevel
      location: string
      progress: number
      objectives: string
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations and returns the data updated in the database.
     * @param {OperationUpdateManyAndReturnArgs} args - Arguments to update many Operations.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
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
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agents<T extends Operation$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Operation$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Operation model
   */
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly name: FieldRef<"Operation", 'String'>
    readonly status: FieldRef<"Operation", 'OperationStatus'>
    readonly priority: FieldRef<"Operation", 'PriorityLevel'>
    readonly location: FieldRef<"Operation", 'String'>
    readonly progress: FieldRef<"Operation", 'Int'>
    readonly objectives: FieldRef<"Operation", 'String'>
    readonly startDate: FieldRef<"Operation", 'DateTime'>
    readonly endDate: FieldRef<"Operation", 'DateTime'>
    readonly createdAt: FieldRef<"Operation", 'DateTime'>
    readonly updatedAt: FieldRef<"Operation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation updateManyAndReturn
   */
  export type OperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to delete.
     */
    limit?: number
  }

  /**
   * Operation.agents
   */
  export type Operation$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    where?: AgentOperationWhereInput
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    cursor?: AgentOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentOperationScalarFieldEnum | AgentOperationScalarFieldEnum[]
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Model AgentOperation
   */

  export type AggregateAgentOperation = {
    _count: AgentOperationCountAggregateOutputType | null
    _min: AgentOperationMinAggregateOutputType | null
    _max: AgentOperationMaxAggregateOutputType | null
  }

  export type AgentOperationMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    operationId: string | null
    assignedAt: Date | null
    role: string | null
  }

  export type AgentOperationMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    operationId: string | null
    assignedAt: Date | null
    role: string | null
  }

  export type AgentOperationCountAggregateOutputType = {
    id: number
    agentId: number
    operationId: number
    assignedAt: number
    role: number
    _all: number
  }


  export type AgentOperationMinAggregateInputType = {
    id?: true
    agentId?: true
    operationId?: true
    assignedAt?: true
    role?: true
  }

  export type AgentOperationMaxAggregateInputType = {
    id?: true
    agentId?: true
    operationId?: true
    assignedAt?: true
    role?: true
  }

  export type AgentOperationCountAggregateInputType = {
    id?: true
    agentId?: true
    operationId?: true
    assignedAt?: true
    role?: true
    _all?: true
  }

  export type AgentOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentOperation to aggregate.
     */
    where?: AgentOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentOperations to fetch.
     */
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentOperations
    **/
    _count?: true | AgentOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentOperationMaxAggregateInputType
  }

  export type GetAgentOperationAggregateType<T extends AgentOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentOperation[P]>
      : GetScalarType<T[P], AggregateAgentOperation[P]>
  }




  export type AgentOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentOperationWhereInput
    orderBy?: AgentOperationOrderByWithAggregationInput | AgentOperationOrderByWithAggregationInput[]
    by: AgentOperationScalarFieldEnum[] | AgentOperationScalarFieldEnum
    having?: AgentOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentOperationCountAggregateInputType | true
    _min?: AgentOperationMinAggregateInputType
    _max?: AgentOperationMaxAggregateInputType
  }

  export type AgentOperationGroupByOutputType = {
    id: string
    agentId: string
    operationId: string
    assignedAt: Date
    role: string | null
    _count: AgentOperationCountAggregateOutputType | null
    _min: AgentOperationMinAggregateOutputType | null
    _max: AgentOperationMaxAggregateOutputType | null
  }

  type GetAgentOperationGroupByPayload<T extends AgentOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentOperationGroupByOutputType[P]>
            : GetScalarType<T[P], AgentOperationGroupByOutputType[P]>
        }
      >
    >


  export type AgentOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    operationId?: boolean
    assignedAt?: boolean
    role?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentOperation"]>

  export type AgentOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    operationId?: boolean
    assignedAt?: boolean
    role?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentOperation"]>

  export type AgentOperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    operationId?: boolean
    assignedAt?: boolean
    role?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentOperation"]>

  export type AgentOperationSelectScalar = {
    id?: boolean
    agentId?: boolean
    operationId?: boolean
    assignedAt?: boolean
    role?: boolean
  }

  export type AgentOperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "operationId" | "assignedAt" | "role", ExtArgs["result"]["agentOperation"]>
  export type AgentOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }
  export type AgentOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }
  export type AgentOperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }

  export type $AgentOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentOperation"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      operation: Prisma.$OperationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      operationId: string
      assignedAt: Date
      role: string | null
    }, ExtArgs["result"]["agentOperation"]>
    composites: {}
  }

  type AgentOperationGetPayload<S extends boolean | null | undefined | AgentOperationDefaultArgs> = $Result.GetResult<Prisma.$AgentOperationPayload, S>

  type AgentOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentOperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentOperationCountAggregateInputType | true
    }

  export interface AgentOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentOperation'], meta: { name: 'AgentOperation' } }
    /**
     * Find zero or one AgentOperation that matches the filter.
     * @param {AgentOperationFindUniqueArgs} args - Arguments to find a AgentOperation
     * @example
     * // Get one AgentOperation
     * const agentOperation = await prisma.agentOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentOperationFindUniqueArgs>(args: SelectSubset<T, AgentOperationFindUniqueArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentOperation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentOperationFindUniqueOrThrowArgs} args - Arguments to find a AgentOperation
     * @example
     * // Get one AgentOperation
     * const agentOperation = await prisma.agentOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationFindFirstArgs} args - Arguments to find a AgentOperation
     * @example
     * // Get one AgentOperation
     * const agentOperation = await prisma.agentOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentOperationFindFirstArgs>(args?: SelectSubset<T, AgentOperationFindFirstArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationFindFirstOrThrowArgs} args - Arguments to find a AgentOperation
     * @example
     * // Get one AgentOperation
     * const agentOperation = await prisma.agentOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentOperations
     * const agentOperations = await prisma.agentOperation.findMany()
     * 
     * // Get first 10 AgentOperations
     * const agentOperations = await prisma.agentOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentOperationWithIdOnly = await prisma.agentOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentOperationFindManyArgs>(args?: SelectSubset<T, AgentOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentOperation.
     * @param {AgentOperationCreateArgs} args - Arguments to create a AgentOperation.
     * @example
     * // Create one AgentOperation
     * const AgentOperation = await prisma.agentOperation.create({
     *   data: {
     *     // ... data to create a AgentOperation
     *   }
     * })
     * 
     */
    create<T extends AgentOperationCreateArgs>(args: SelectSubset<T, AgentOperationCreateArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentOperations.
     * @param {AgentOperationCreateManyArgs} args - Arguments to create many AgentOperations.
     * @example
     * // Create many AgentOperations
     * const agentOperation = await prisma.agentOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentOperationCreateManyArgs>(args?: SelectSubset<T, AgentOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentOperations and returns the data saved in the database.
     * @param {AgentOperationCreateManyAndReturnArgs} args - Arguments to create many AgentOperations.
     * @example
     * // Create many AgentOperations
     * const agentOperation = await prisma.agentOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentOperations and only return the `id`
     * const agentOperationWithIdOnly = await prisma.agentOperation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentOperation.
     * @param {AgentOperationDeleteArgs} args - Arguments to delete one AgentOperation.
     * @example
     * // Delete one AgentOperation
     * const AgentOperation = await prisma.agentOperation.delete({
     *   where: {
     *     // ... filter to delete one AgentOperation
     *   }
     * })
     * 
     */
    delete<T extends AgentOperationDeleteArgs>(args: SelectSubset<T, AgentOperationDeleteArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentOperation.
     * @param {AgentOperationUpdateArgs} args - Arguments to update one AgentOperation.
     * @example
     * // Update one AgentOperation
     * const agentOperation = await prisma.agentOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentOperationUpdateArgs>(args: SelectSubset<T, AgentOperationUpdateArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentOperations.
     * @param {AgentOperationDeleteManyArgs} args - Arguments to filter AgentOperations to delete.
     * @example
     * // Delete a few AgentOperations
     * const { count } = await prisma.agentOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentOperationDeleteManyArgs>(args?: SelectSubset<T, AgentOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentOperations
     * const agentOperation = await prisma.agentOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentOperationUpdateManyArgs>(args: SelectSubset<T, AgentOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentOperations and returns the data updated in the database.
     * @param {AgentOperationUpdateManyAndReturnArgs} args - Arguments to update many AgentOperations.
     * @example
     * // Update many AgentOperations
     * const agentOperation = await prisma.agentOperation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentOperations and only return the `id`
     * const agentOperationWithIdOnly = await prisma.agentOperation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentOperationUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentOperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentOperation.
     * @param {AgentOperationUpsertArgs} args - Arguments to update or create a AgentOperation.
     * @example
     * // Update or create a AgentOperation
     * const agentOperation = await prisma.agentOperation.upsert({
     *   create: {
     *     // ... data to create a AgentOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentOperation we want to update
     *   }
     * })
     */
    upsert<T extends AgentOperationUpsertArgs>(args: SelectSubset<T, AgentOperationUpsertArgs<ExtArgs>>): Prisma__AgentOperationClient<$Result.GetResult<Prisma.$AgentOperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationCountArgs} args - Arguments to filter AgentOperations to count.
     * @example
     * // Count the number of AgentOperations
     * const count = await prisma.agentOperation.count({
     *   where: {
     *     // ... the filter for the AgentOperations we want to count
     *   }
     * })
    **/
    count<T extends AgentOperationCountArgs>(
      args?: Subset<T, AgentOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentOperationAggregateArgs>(args: Subset<T, AgentOperationAggregateArgs>): Prisma.PrismaPromise<GetAgentOperationAggregateType<T>>

    /**
     * Group by AgentOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentOperationGroupByArgs} args - Group by arguments.
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
      T extends AgentOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentOperationGroupByArgs['orderBy'] }
        : { orderBy?: AgentOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentOperation model
   */
  readonly fields: AgentOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operation<T extends OperationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperationDefaultArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgentOperation model
   */
  interface AgentOperationFieldRefs {
    readonly id: FieldRef<"AgentOperation", 'String'>
    readonly agentId: FieldRef<"AgentOperation", 'String'>
    readonly operationId: FieldRef<"AgentOperation", 'String'>
    readonly assignedAt: FieldRef<"AgentOperation", 'DateTime'>
    readonly role: FieldRef<"AgentOperation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgentOperation findUnique
   */
  export type AgentOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter, which AgentOperation to fetch.
     */
    where: AgentOperationWhereUniqueInput
  }

  /**
   * AgentOperation findUniqueOrThrow
   */
  export type AgentOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter, which AgentOperation to fetch.
     */
    where: AgentOperationWhereUniqueInput
  }

  /**
   * AgentOperation findFirst
   */
  export type AgentOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter, which AgentOperation to fetch.
     */
    where?: AgentOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentOperations to fetch.
     */
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentOperations.
     */
    cursor?: AgentOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentOperations.
     */
    distinct?: AgentOperationScalarFieldEnum | AgentOperationScalarFieldEnum[]
  }

  /**
   * AgentOperation findFirstOrThrow
   */
  export type AgentOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter, which AgentOperation to fetch.
     */
    where?: AgentOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentOperations to fetch.
     */
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentOperations.
     */
    cursor?: AgentOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentOperations.
     */
    distinct?: AgentOperationScalarFieldEnum | AgentOperationScalarFieldEnum[]
  }

  /**
   * AgentOperation findMany
   */
  export type AgentOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter, which AgentOperations to fetch.
     */
    where?: AgentOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentOperations to fetch.
     */
    orderBy?: AgentOperationOrderByWithRelationInput | AgentOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentOperations.
     */
    cursor?: AgentOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentOperations.
     */
    skip?: number
    distinct?: AgentOperationScalarFieldEnum | AgentOperationScalarFieldEnum[]
  }

  /**
   * AgentOperation create
   */
  export type AgentOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentOperation.
     */
    data: XOR<AgentOperationCreateInput, AgentOperationUncheckedCreateInput>
  }

  /**
   * AgentOperation createMany
   */
  export type AgentOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentOperations.
     */
    data: AgentOperationCreateManyInput | AgentOperationCreateManyInput[]
  }

  /**
   * AgentOperation createManyAndReturn
   */
  export type AgentOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * The data used to create many AgentOperations.
     */
    data: AgentOperationCreateManyInput | AgentOperationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentOperation update
   */
  export type AgentOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentOperation.
     */
    data: XOR<AgentOperationUpdateInput, AgentOperationUncheckedUpdateInput>
    /**
     * Choose, which AgentOperation to update.
     */
    where: AgentOperationWhereUniqueInput
  }

  /**
   * AgentOperation updateMany
   */
  export type AgentOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentOperations.
     */
    data: XOR<AgentOperationUpdateManyMutationInput, AgentOperationUncheckedUpdateManyInput>
    /**
     * Filter which AgentOperations to update
     */
    where?: AgentOperationWhereInput
    /**
     * Limit how many AgentOperations to update.
     */
    limit?: number
  }

  /**
   * AgentOperation updateManyAndReturn
   */
  export type AgentOperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * The data used to update AgentOperations.
     */
    data: XOR<AgentOperationUpdateManyMutationInput, AgentOperationUncheckedUpdateManyInput>
    /**
     * Filter which AgentOperations to update
     */
    where?: AgentOperationWhereInput
    /**
     * Limit how many AgentOperations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentOperation upsert
   */
  export type AgentOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentOperation to update in case it exists.
     */
    where: AgentOperationWhereUniqueInput
    /**
     * In case the AgentOperation found by the `where` argument doesn't exist, create a new AgentOperation with this data.
     */
    create: XOR<AgentOperationCreateInput, AgentOperationUncheckedCreateInput>
    /**
     * In case the AgentOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentOperationUpdateInput, AgentOperationUncheckedUpdateInput>
  }

  /**
   * AgentOperation delete
   */
  export type AgentOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
    /**
     * Filter which AgentOperation to delete.
     */
    where: AgentOperationWhereUniqueInput
  }

  /**
   * AgentOperation deleteMany
   */
  export type AgentOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentOperations to delete
     */
    where?: AgentOperationWhereInput
    /**
     * Limit how many AgentOperations to delete.
     */
    limit?: number
  }

  /**
   * AgentOperation without action
   */
  export type AgentOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentOperation
     */
    select?: AgentOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentOperation
     */
    omit?: AgentOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentOperationInclude<ExtArgs> | null
  }


  /**
   * Model System
   */

  export type AggregateSystem = {
    _count: SystemCountAggregateOutputType | null
    _avg: SystemAvgAggregateOutputType | null
    _sum: SystemSumAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  export type SystemAvgAggregateOutputType = {
    health: number | null
    cpu: number | null
    memory: number | null
    storage: number | null
  }

  export type SystemSumAggregateOutputType = {
    health: number | null
    cpu: number | null
    memory: number | null
    storage: number | null
  }

  export type SystemMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.SystemType | null
    status: $Enums.SystemStatus | null
    health: number | null
    cpu: number | null
    memory: number | null
    storage: number | null
    uptime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.SystemType | null
    status: $Enums.SystemStatus | null
    health: number | null
    cpu: number | null
    memory: number | null
    storage: number | null
    uptime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    health: number
    cpu: number
    memory: number
    storage: number
    uptime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemAvgAggregateInputType = {
    health?: true
    cpu?: true
    memory?: true
    storage?: true
  }

  export type SystemSumAggregateInputType = {
    health?: true
    cpu?: true
    memory?: true
    storage?: true
  }

  export type SystemMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    health?: true
    cpu?: true
    memory?: true
    storage?: true
    uptime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    health?: true
    cpu?: true
    memory?: true
    storage?: true
    uptime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    health?: true
    cpu?: true
    memory?: true
    storage?: true
    uptime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which System to aggregate.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Systems
    **/
    _count?: true | SystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMaxAggregateInputType
  }

  export type GetSystemAggregateType<T extends SystemAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem[P]>
      : GetScalarType<T[P], AggregateSystem[P]>
  }




  export type SystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemWhereInput
    orderBy?: SystemOrderByWithAggregationInput | SystemOrderByWithAggregationInput[]
    by: SystemScalarFieldEnum[] | SystemScalarFieldEnum
    having?: SystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemCountAggregateInputType | true
    _avg?: SystemAvgAggregateInputType
    _sum?: SystemSumAggregateInputType
    _min?: SystemMinAggregateInputType
    _max?: SystemMaxAggregateInputType
  }

  export type SystemGroupByOutputType = {
    id: string
    name: string
    type: $Enums.SystemType
    status: $Enums.SystemStatus
    health: number
    cpu: number
    memory: number
    storage: number
    uptime: string
    createdAt: Date
    updatedAt: Date
    _count: SystemCountAggregateOutputType | null
    _avg: SystemAvgAggregateOutputType | null
    _sum: SystemSumAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  type GetSystemGroupByPayload<T extends SystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemGroupByOutputType[P]>
            : GetScalarType<T[P], SystemGroupByOutputType[P]>
        }
      >
    >


  export type SystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    health?: boolean
    cpu?: boolean
    memory?: boolean
    storage?: boolean
    uptime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["system"]>

  export type SystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    health?: boolean
    cpu?: boolean
    memory?: boolean
    storage?: boolean
    uptime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["system"]>

  export type SystemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    health?: boolean
    cpu?: boolean
    memory?: boolean
    storage?: boolean
    uptime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["system"]>

  export type SystemSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    health?: boolean
    cpu?: boolean
    memory?: boolean
    storage?: boolean
    uptime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "health" | "cpu" | "memory" | "storage" | "uptime" | "createdAt" | "updatedAt", ExtArgs["result"]["system"]>

  export type $SystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "System"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.SystemType
      status: $Enums.SystemStatus
      health: number
      cpu: number
      memory: number
      storage: number
      uptime: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["system"]>
    composites: {}
  }

  type SystemGetPayload<S extends boolean | null | undefined | SystemDefaultArgs> = $Result.GetResult<Prisma.$SystemPayload, S>

  type SystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemCountAggregateInputType | true
    }

  export interface SystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['System'], meta: { name: 'System' } }
    /**
     * Find zero or one System that matches the filter.
     * @param {SystemFindUniqueArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemFindUniqueArgs>(args: SelectSubset<T, SystemFindUniqueArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemFindUniqueOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemFindFirstArgs>(args?: SelectSubset<T, SystemFindFirstArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Systems
     * const systems = await prisma.system.findMany()
     * 
     * // Get first 10 Systems
     * const systems = await prisma.system.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemWithIdOnly = await prisma.system.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemFindManyArgs>(args?: SelectSubset<T, SystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System.
     * @param {SystemCreateArgs} args - Arguments to create a System.
     * @example
     * // Create one System
     * const System = await prisma.system.create({
     *   data: {
     *     // ... data to create a System
     *   }
     * })
     * 
     */
    create<T extends SystemCreateArgs>(args: SelectSubset<T, SystemCreateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Systems.
     * @param {SystemCreateManyArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemCreateManyArgs>(args?: SelectSubset<T, SystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Systems and returns the data saved in the database.
     * @param {SystemCreateManyAndReturnArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a System.
     * @param {SystemDeleteArgs} args - Arguments to delete one System.
     * @example
     * // Delete one System
     * const System = await prisma.system.delete({
     *   where: {
     *     // ... filter to delete one System
     *   }
     * })
     * 
     */
    delete<T extends SystemDeleteArgs>(args: SelectSubset<T, SystemDeleteArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System.
     * @param {SystemUpdateArgs} args - Arguments to update one System.
     * @example
     * // Update one System
     * const system = await prisma.system.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemUpdateArgs>(args: SelectSubset<T, SystemUpdateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Systems.
     * @param {SystemDeleteManyArgs} args - Arguments to filter Systems to delete.
     * @example
     * // Delete a few Systems
     * const { count } = await prisma.system.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemDeleteManyArgs>(args?: SelectSubset<T, SystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemUpdateManyArgs>(args: SelectSubset<T, SystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems and returns the data updated in the database.
     * @param {SystemUpdateManyAndReturnArgs} args - Arguments to update many Systems.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one System.
     * @param {SystemUpsertArgs} args - Arguments to update or create a System.
     * @example
     * // Update or create a System
     * const system = await prisma.system.upsert({
     *   create: {
     *     // ... data to create a System
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System we want to update
     *   }
     * })
     */
    upsert<T extends SystemUpsertArgs>(args: SelectSubset<T, SystemUpsertArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemCountArgs} args - Arguments to filter Systems to count.
     * @example
     * // Count the number of Systems
     * const count = await prisma.system.count({
     *   where: {
     *     // ... the filter for the Systems we want to count
     *   }
     * })
    **/
    count<T extends SystemCountArgs>(
      args?: Subset<T, SystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemAggregateArgs>(args: Subset<T, SystemAggregateArgs>): Prisma.PrismaPromise<GetSystemAggregateType<T>>

    /**
     * Group by System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemGroupByArgs} args - Group by arguments.
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
      T extends SystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemGroupByArgs['orderBy'] }
        : { orderBy?: SystemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the System model
   */
  readonly fields: SystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for System.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the System model
   */
  interface SystemFieldRefs {
    readonly id: FieldRef<"System", 'String'>
    readonly name: FieldRef<"System", 'String'>
    readonly type: FieldRef<"System", 'SystemType'>
    readonly status: FieldRef<"System", 'SystemStatus'>
    readonly health: FieldRef<"System", 'Int'>
    readonly cpu: FieldRef<"System", 'Int'>
    readonly memory: FieldRef<"System", 'Int'>
    readonly storage: FieldRef<"System", 'Int'>
    readonly uptime: FieldRef<"System", 'String'>
    readonly createdAt: FieldRef<"System", 'DateTime'>
    readonly updatedAt: FieldRef<"System", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * System findUnique
   */
  export type SystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findUniqueOrThrow
   */
  export type SystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findFirst
   */
  export type SystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findFirstOrThrow
   */
  export type SystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findMany
   */
  export type SystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System create
   */
  export type SystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data needed to create a System.
     */
    data: XOR<SystemCreateInput, SystemUncheckedCreateInput>
  }

  /**
   * System createMany
   */
  export type SystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
  }

  /**
   * System createManyAndReturn
   */
  export type SystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
  }

  /**
   * System update
   */
  export type SystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data needed to update a System.
     */
    data: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
    /**
     * Choose, which System to update.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System updateMany
   */
  export type SystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * System updateManyAndReturn
   */
  export type SystemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * System upsert
   */
  export type SystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The filter to search for the System to update in case it exists.
     */
    where: SystemWhereUniqueInput
    /**
     * In case the System found by the `where` argument doesn't exist, create a new System with this data.
     */
    create: XOR<SystemCreateInput, SystemUncheckedCreateInput>
    /**
     * In case the System was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
  }

  /**
   * System delete
   */
  export type SystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Filter which System to delete.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System deleteMany
   */
  export type SystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Systems to delete
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to delete.
     */
    limit?: number
  }

  /**
   * System without action
   */
  export type SystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
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
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgentScalarFieldEnum: {
    id: 'id',
    codename: 'codename',
    status: 'status',
    riskLevel: 'riskLevel',
    location: 'location',
    lastSeen: 'lastSeen',
    missionsCompleted: 'missionsCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const AgentActivityScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    action: 'action',
    location: 'location',
    timestamp: 'timestamp',
    details: 'details'
  };

  export type AgentActivityScalarFieldEnum = (typeof AgentActivityScalarFieldEnum)[keyof typeof AgentActivityScalarFieldEnum]


  export const IntelligenceReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    classification: 'classification',
    source: 'source',
    location: 'location',
    threatLevel: 'threatLevel',
    status: 'status',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntelligenceReportScalarFieldEnum = (typeof IntelligenceReportScalarFieldEnum)[keyof typeof IntelligenceReportScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    priority: 'priority',
    location: 'location',
    progress: 'progress',
    objectives: 'objectives',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const AgentOperationScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    operationId: 'operationId',
    assignedAt: 'assignedAt',
    role: 'role'
  };

  export type AgentOperationScalarFieldEnum = (typeof AgentOperationScalarFieldEnum)[keyof typeof AgentOperationScalarFieldEnum]


  export const SystemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    health: 'health',
    cpu: 'cpu',
    memory: 'memory',
    storage: 'storage',
    uptime: 'uptime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemScalarFieldEnum = (typeof SystemScalarFieldEnum)[keyof typeof SystemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'AgentStatus'
   */
  export type EnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ClassificationLevel'
   */
  export type EnumClassificationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassificationLevel'>
    


  /**
   * Reference to a field of type 'IntelligenceSource'
   */
  export type EnumIntelligenceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntelligenceSource'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'OperationStatus'
   */
  export type EnumOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationStatus'>
    


  /**
   * Reference to a field of type 'PriorityLevel'
   */
  export type EnumPriorityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriorityLevel'>
    


  /**
   * Reference to a field of type 'SystemType'
   */
  export type EnumSystemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemType'>
    


  /**
   * Reference to a field of type 'SystemStatus'
   */
  export type EnumSystemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemStatus'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    codename?: StringFilter<"Agent"> | string
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFilter<"Agent"> | $Enums.RiskLevel
    location?: StringNullableFilter<"Agent"> | string | null
    lastSeen?: DateTimeNullableFilter<"Agent"> | Date | string | null
    missionsCompleted?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    operations?: AgentOperationListRelationFilter
    activities?: AgentActivityListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    codename?: SortOrder
    status?: SortOrder
    riskLevel?: SortOrder
    location?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    missionsCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    operations?: AgentOperationOrderByRelationAggregateInput
    activities?: AgentActivityOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codename?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFilter<"Agent"> | $Enums.RiskLevel
    location?: StringNullableFilter<"Agent"> | string | null
    lastSeen?: DateTimeNullableFilter<"Agent"> | Date | string | null
    missionsCompleted?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    operations?: AgentOperationListRelationFilter
    activities?: AgentActivityListRelationFilter
  }, "id" | "codename">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    codename?: SortOrder
    status?: SortOrder
    riskLevel?: SortOrder
    location?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    missionsCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    codename?: StringWithAggregatesFilter<"Agent"> | string
    status?: EnumAgentStatusWithAggregatesFilter<"Agent"> | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Agent"> | $Enums.RiskLevel
    location?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Agent"> | Date | string | null
    missionsCompleted?: IntWithAggregatesFilter<"Agent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type AgentActivityWhereInput = {
    AND?: AgentActivityWhereInput | AgentActivityWhereInput[]
    OR?: AgentActivityWhereInput[]
    NOT?: AgentActivityWhereInput | AgentActivityWhereInput[]
    id?: StringFilter<"AgentActivity"> | string
    agentId?: StringFilter<"AgentActivity"> | string
    action?: StringFilter<"AgentActivity"> | string
    location?: StringNullableFilter<"AgentActivity"> | string | null
    timestamp?: DateTimeFilter<"AgentActivity"> | Date | string
    details?: StringNullableFilter<"AgentActivity"> | string | null
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type AgentActivityOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    action?: SortOrder
    location?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type AgentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentActivityWhereInput | AgentActivityWhereInput[]
    OR?: AgentActivityWhereInput[]
    NOT?: AgentActivityWhereInput | AgentActivityWhereInput[]
    agentId?: StringFilter<"AgentActivity"> | string
    action?: StringFilter<"AgentActivity"> | string
    location?: StringNullableFilter<"AgentActivity"> | string | null
    timestamp?: DateTimeFilter<"AgentActivity"> | Date | string
    details?: StringNullableFilter<"AgentActivity"> | string | null
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type AgentActivityOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    action?: SortOrder
    location?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: AgentActivityCountOrderByAggregateInput
    _max?: AgentActivityMaxOrderByAggregateInput
    _min?: AgentActivityMinOrderByAggregateInput
  }

  export type AgentActivityScalarWhereWithAggregatesInput = {
    AND?: AgentActivityScalarWhereWithAggregatesInput | AgentActivityScalarWhereWithAggregatesInput[]
    OR?: AgentActivityScalarWhereWithAggregatesInput[]
    NOT?: AgentActivityScalarWhereWithAggregatesInput | AgentActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentActivity"> | string
    agentId?: StringWithAggregatesFilter<"AgentActivity"> | string
    action?: StringWithAggregatesFilter<"AgentActivity"> | string
    location?: StringNullableWithAggregatesFilter<"AgentActivity"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AgentActivity"> | Date | string
    details?: StringNullableWithAggregatesFilter<"AgentActivity"> | string | null
  }

  export type IntelligenceReportWhereInput = {
    AND?: IntelligenceReportWhereInput | IntelligenceReportWhereInput[]
    OR?: IntelligenceReportWhereInput[]
    NOT?: IntelligenceReportWhereInput | IntelligenceReportWhereInput[]
    id?: StringFilter<"IntelligenceReport"> | string
    title?: StringFilter<"IntelligenceReport"> | string
    classification?: EnumClassificationLevelFilter<"IntelligenceReport"> | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFilter<"IntelligenceReport"> | $Enums.IntelligenceSource
    location?: StringNullableFilter<"IntelligenceReport"> | string | null
    threatLevel?: EnumRiskLevelFilter<"IntelligenceReport"> | $Enums.RiskLevel
    status?: EnumReportStatusFilter<"IntelligenceReport"> | $Enums.ReportStatus
    content?: StringFilter<"IntelligenceReport"> | string
    tags?: StringFilter<"IntelligenceReport"> | string
    createdAt?: DateTimeFilter<"IntelligenceReport"> | Date | string
    updatedAt?: DateTimeFilter<"IntelligenceReport"> | Date | string
  }

  export type IntelligenceReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    classification?: SortOrder
    source?: SortOrder
    location?: SortOrderInput | SortOrder
    threatLevel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntelligenceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntelligenceReportWhereInput | IntelligenceReportWhereInput[]
    OR?: IntelligenceReportWhereInput[]
    NOT?: IntelligenceReportWhereInput | IntelligenceReportWhereInput[]
    title?: StringFilter<"IntelligenceReport"> | string
    classification?: EnumClassificationLevelFilter<"IntelligenceReport"> | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFilter<"IntelligenceReport"> | $Enums.IntelligenceSource
    location?: StringNullableFilter<"IntelligenceReport"> | string | null
    threatLevel?: EnumRiskLevelFilter<"IntelligenceReport"> | $Enums.RiskLevel
    status?: EnumReportStatusFilter<"IntelligenceReport"> | $Enums.ReportStatus
    content?: StringFilter<"IntelligenceReport"> | string
    tags?: StringFilter<"IntelligenceReport"> | string
    createdAt?: DateTimeFilter<"IntelligenceReport"> | Date | string
    updatedAt?: DateTimeFilter<"IntelligenceReport"> | Date | string
  }, "id">

  export type IntelligenceReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    classification?: SortOrder
    source?: SortOrder
    location?: SortOrderInput | SortOrder
    threatLevel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntelligenceReportCountOrderByAggregateInput
    _max?: IntelligenceReportMaxOrderByAggregateInput
    _min?: IntelligenceReportMinOrderByAggregateInput
  }

  export type IntelligenceReportScalarWhereWithAggregatesInput = {
    AND?: IntelligenceReportScalarWhereWithAggregatesInput | IntelligenceReportScalarWhereWithAggregatesInput[]
    OR?: IntelligenceReportScalarWhereWithAggregatesInput[]
    NOT?: IntelligenceReportScalarWhereWithAggregatesInput | IntelligenceReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntelligenceReport"> | string
    title?: StringWithAggregatesFilter<"IntelligenceReport"> | string
    classification?: EnumClassificationLevelWithAggregatesFilter<"IntelligenceReport"> | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceWithAggregatesFilter<"IntelligenceReport"> | $Enums.IntelligenceSource
    location?: StringNullableWithAggregatesFilter<"IntelligenceReport"> | string | null
    threatLevel?: EnumRiskLevelWithAggregatesFilter<"IntelligenceReport"> | $Enums.RiskLevel
    status?: EnumReportStatusWithAggregatesFilter<"IntelligenceReport"> | $Enums.ReportStatus
    content?: StringWithAggregatesFilter<"IntelligenceReport"> | string
    tags?: StringWithAggregatesFilter<"IntelligenceReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IntelligenceReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntelligenceReport"> | Date | string
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: StringFilter<"Operation"> | string
    name?: StringFilter<"Operation"> | string
    status?: EnumOperationStatusFilter<"Operation"> | $Enums.OperationStatus
    priority?: EnumPriorityLevelFilter<"Operation"> | $Enums.PriorityLevel
    location?: StringFilter<"Operation"> | string
    progress?: IntFilter<"Operation"> | number
    objectives?: StringFilter<"Operation"> | string
    startDate?: DateTimeNullableFilter<"Operation"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Operation"> | Date | string | null
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    agents?: AgentOperationListRelationFilter
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    progress?: SortOrder
    objectives?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agents?: AgentOperationOrderByRelationAggregateInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    name?: StringFilter<"Operation"> | string
    status?: EnumOperationStatusFilter<"Operation"> | $Enums.OperationStatus
    priority?: EnumPriorityLevelFilter<"Operation"> | $Enums.PriorityLevel
    location?: StringFilter<"Operation"> | string
    progress?: IntFilter<"Operation"> | number
    objectives?: StringFilter<"Operation"> | string
    startDate?: DateTimeNullableFilter<"Operation"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Operation"> | Date | string | null
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    agents?: AgentOperationListRelationFilter
  }, "id">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    progress?: SortOrder
    objectives?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _avg?: OperationAvgOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
    _sum?: OperationSumOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operation"> | string
    name?: StringWithAggregatesFilter<"Operation"> | string
    status?: EnumOperationStatusWithAggregatesFilter<"Operation"> | $Enums.OperationStatus
    priority?: EnumPriorityLevelWithAggregatesFilter<"Operation"> | $Enums.PriorityLevel
    location?: StringWithAggregatesFilter<"Operation"> | string
    progress?: IntWithAggregatesFilter<"Operation"> | number
    objectives?: StringWithAggregatesFilter<"Operation"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Operation"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Operation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
  }

  export type AgentOperationWhereInput = {
    AND?: AgentOperationWhereInput | AgentOperationWhereInput[]
    OR?: AgentOperationWhereInput[]
    NOT?: AgentOperationWhereInput | AgentOperationWhereInput[]
    id?: StringFilter<"AgentOperation"> | string
    agentId?: StringFilter<"AgentOperation"> | string
    operationId?: StringFilter<"AgentOperation"> | string
    assignedAt?: DateTimeFilter<"AgentOperation"> | Date | string
    role?: StringNullableFilter<"AgentOperation"> | string | null
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    operation?: XOR<OperationScalarRelationFilter, OperationWhereInput>
  }

  export type AgentOperationOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    operationId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    agent?: AgentOrderByWithRelationInput
    operation?: OperationOrderByWithRelationInput
  }

  export type AgentOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_operationId?: AgentOperationAgentIdOperationIdCompoundUniqueInput
    AND?: AgentOperationWhereInput | AgentOperationWhereInput[]
    OR?: AgentOperationWhereInput[]
    NOT?: AgentOperationWhereInput | AgentOperationWhereInput[]
    agentId?: StringFilter<"AgentOperation"> | string
    operationId?: StringFilter<"AgentOperation"> | string
    assignedAt?: DateTimeFilter<"AgentOperation"> | Date | string
    role?: StringNullableFilter<"AgentOperation"> | string | null
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    operation?: XOR<OperationScalarRelationFilter, OperationWhereInput>
  }, "id" | "agentId_operationId">

  export type AgentOperationOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    operationId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: AgentOperationCountOrderByAggregateInput
    _max?: AgentOperationMaxOrderByAggregateInput
    _min?: AgentOperationMinOrderByAggregateInput
  }

  export type AgentOperationScalarWhereWithAggregatesInput = {
    AND?: AgentOperationScalarWhereWithAggregatesInput | AgentOperationScalarWhereWithAggregatesInput[]
    OR?: AgentOperationScalarWhereWithAggregatesInput[]
    NOT?: AgentOperationScalarWhereWithAggregatesInput | AgentOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentOperation"> | string
    agentId?: StringWithAggregatesFilter<"AgentOperation"> | string
    operationId?: StringWithAggregatesFilter<"AgentOperation"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"AgentOperation"> | Date | string
    role?: StringNullableWithAggregatesFilter<"AgentOperation"> | string | null
  }

  export type SystemWhereInput = {
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    id?: StringFilter<"System"> | string
    name?: StringFilter<"System"> | string
    type?: EnumSystemTypeFilter<"System"> | $Enums.SystemType
    status?: EnumSystemStatusFilter<"System"> | $Enums.SystemStatus
    health?: IntFilter<"System"> | number
    cpu?: IntFilter<"System"> | number
    memory?: IntFilter<"System"> | number
    storage?: IntFilter<"System"> | number
    uptime?: StringFilter<"System"> | string
    createdAt?: DateTimeFilter<"System"> | Date | string
    updatedAt?: DateTimeFilter<"System"> | Date | string
  }

  export type SystemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    uptime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    name?: StringFilter<"System"> | string
    type?: EnumSystemTypeFilter<"System"> | $Enums.SystemType
    status?: EnumSystemStatusFilter<"System"> | $Enums.SystemStatus
    health?: IntFilter<"System"> | number
    cpu?: IntFilter<"System"> | number
    memory?: IntFilter<"System"> | number
    storage?: IntFilter<"System"> | number
    uptime?: StringFilter<"System"> | string
    createdAt?: DateTimeFilter<"System"> | Date | string
    updatedAt?: DateTimeFilter<"System"> | Date | string
  }, "id">

  export type SystemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    uptime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemCountOrderByAggregateInput
    _avg?: SystemAvgOrderByAggregateInput
    _max?: SystemMaxOrderByAggregateInput
    _min?: SystemMinOrderByAggregateInput
    _sum?: SystemSumOrderByAggregateInput
  }

  export type SystemScalarWhereWithAggregatesInput = {
    AND?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    OR?: SystemScalarWhereWithAggregatesInput[]
    NOT?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"System"> | string
    name?: StringWithAggregatesFilter<"System"> | string
    type?: EnumSystemTypeWithAggregatesFilter<"System"> | $Enums.SystemType
    status?: EnumSystemStatusWithAggregatesFilter<"System"> | $Enums.SystemStatus
    health?: IntWithAggregatesFilter<"System"> | number
    cpu?: IntWithAggregatesFilter<"System"> | number
    memory?: IntWithAggregatesFilter<"System"> | number
    storage?: IntWithAggregatesFilter<"System"> | number
    uptime?: StringWithAggregatesFilter<"System"> | string
    createdAt?: DateTimeWithAggregatesFilter<"System"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"System"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AgentCreateInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: AgentOperationCreateNestedManyWithoutAgentInput
    activities?: AgentActivityCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: AgentOperationUncheckedCreateNestedManyWithoutAgentInput
    activities?: AgentActivityUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: AgentOperationUpdateManyWithoutAgentNestedInput
    activities?: AgentActivityUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: AgentOperationUncheckedUpdateManyWithoutAgentNestedInput
    activities?: AgentActivityUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentActivityCreateInput = {
    id?: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
    agent: AgentCreateNestedOneWithoutActivitiesInput
  }

  export type AgentActivityUncheckedCreateInput = {
    id?: string
    agentId: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
  }

  export type AgentActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: AgentUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type AgentActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentActivityCreateManyInput = {
    id?: string
    agentId: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
  }

  export type AgentActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntelligenceReportCreateInput = {
    id: string
    title: string
    classification?: $Enums.ClassificationLevel
    source: $Enums.IntelligenceSource
    location?: string | null
    threatLevel?: $Enums.RiskLevel
    status?: $Enums.ReportStatus
    content: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntelligenceReportUncheckedCreateInput = {
    id: string
    title: string
    classification?: $Enums.ClassificationLevel
    source: $Enums.IntelligenceSource
    location?: string | null
    threatLevel?: $Enums.RiskLevel
    status?: $Enums.ReportStatus
    content: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntelligenceReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    classification?: EnumClassificationLevelFieldUpdateOperationsInput | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFieldUpdateOperationsInput | $Enums.IntelligenceSource
    location?: NullableStringFieldUpdateOperationsInput | string | null
    threatLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntelligenceReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    classification?: EnumClassificationLevelFieldUpdateOperationsInput | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFieldUpdateOperationsInput | $Enums.IntelligenceSource
    location?: NullableStringFieldUpdateOperationsInput | string | null
    threatLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntelligenceReportCreateManyInput = {
    id: string
    title: string
    classification?: $Enums.ClassificationLevel
    source: $Enums.IntelligenceSource
    location?: string | null
    threatLevel?: $Enums.RiskLevel
    status?: $Enums.ReportStatus
    content: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntelligenceReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    classification?: EnumClassificationLevelFieldUpdateOperationsInput | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFieldUpdateOperationsInput | $Enums.IntelligenceSource
    location?: NullableStringFieldUpdateOperationsInput | string | null
    threatLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntelligenceReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    classification?: EnumClassificationLevelFieldUpdateOperationsInput | $Enums.ClassificationLevel
    source?: EnumIntelligenceSourceFieldUpdateOperationsInput | $Enums.IntelligenceSource
    location?: NullableStringFieldUpdateOperationsInput | string | null
    threatLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateInput = {
    id: string
    name: string
    status?: $Enums.OperationStatus
    priority?: $Enums.PriorityLevel
    location: string
    progress?: number
    objectives: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agents?: AgentOperationCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateInput = {
    id: string
    name: string
    status?: $Enums.OperationStatus
    priority?: $Enums.PriorityLevel
    location: string
    progress?: number
    objectives: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agents?: AgentOperationUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentOperationUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentOperationUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationCreateManyInput = {
    id: string
    name: string
    status?: $Enums.OperationStatus
    priority?: $Enums.PriorityLevel
    location: string
    progress?: number
    objectives: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentOperationCreateInput = {
    id?: string
    assignedAt?: Date | string
    role?: string | null
    agent: AgentCreateNestedOneWithoutOperationsInput
    operation: OperationCreateNestedOneWithoutAgentsInput
  }

  export type AgentOperationUncheckedCreateInput = {
    id?: string
    agentId: string
    operationId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: AgentUpdateOneRequiredWithoutOperationsNestedInput
    operation?: OperationUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentOperationCreateManyInput = {
    id?: string
    agentId: string
    operationId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemCreateInput = {
    id: string
    name: string
    type: $Enums.SystemType
    status?: $Enums.SystemStatus
    health?: number
    cpu?: number
    memory?: number
    storage?: number
    uptime?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUncheckedCreateInput = {
    id: string
    name: string
    type: $Enums.SystemType
    status?: $Enums.SystemStatus
    health?: number
    cpu?: number
    memory?: number
    storage?: number
    uptime?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemTypeFieldUpdateOperationsInput | $Enums.SystemType
    status?: EnumSystemStatusFieldUpdateOperationsInput | $Enums.SystemStatus
    health?: IntFieldUpdateOperationsInput | number
    cpu?: IntFieldUpdateOperationsInput | number
    memory?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemTypeFieldUpdateOperationsInput | $Enums.SystemType
    status?: EnumSystemStatusFieldUpdateOperationsInput | $Enums.SystemStatus
    health?: IntFieldUpdateOperationsInput | number
    cpu?: IntFieldUpdateOperationsInput | number
    memory?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemCreateManyInput = {
    id: string
    name: string
    type: $Enums.SystemType
    status?: $Enums.SystemStatus
    health?: number
    cpu?: number
    memory?: number
    storage?: number
    uptime?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemTypeFieldUpdateOperationsInput | $Enums.SystemType
    status?: EnumSystemStatusFieldUpdateOperationsInput | $Enums.SystemStatus
    health?: IntFieldUpdateOperationsInput | number
    cpu?: IntFieldUpdateOperationsInput | number
    memory?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemTypeFieldUpdateOperationsInput | $Enums.SystemType
    status?: EnumSystemStatusFieldUpdateOperationsInput | $Enums.SystemStatus
    health?: IntFieldUpdateOperationsInput | number
    cpu?: IntFieldUpdateOperationsInput | number
    memory?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgentOperationListRelationFilter = {
    every?: AgentOperationWhereInput
    some?: AgentOperationWhereInput
    none?: AgentOperationWhereInput
  }

  export type AgentActivityListRelationFilter = {
    every?: AgentActivityWhereInput
    some?: AgentActivityWhereInput
    none?: AgentActivityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentOperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    codename?: SortOrder
    status?: SortOrder
    riskLevel?: SortOrder
    location?: SortOrder
    lastSeen?: SortOrder
    missionsCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    missionsCompleted?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    codename?: SortOrder
    status?: SortOrder
    riskLevel?: SortOrder
    location?: SortOrder
    lastSeen?: SortOrder
    missionsCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    codename?: SortOrder
    status?: SortOrder
    riskLevel?: SortOrder
    location?: SortOrder
    lastSeen?: SortOrder
    missionsCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    missionsCompleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type AgentActivityCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    action?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    details?: SortOrder
  }

  export type AgentActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    action?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    details?: SortOrder
  }

  export type AgentActivityMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    action?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    details?: SortOrder
  }

  export type EnumClassificationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationLevel | EnumClassificationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationLevel[]
    notIn?: $Enums.ClassificationLevel[]
    not?: NestedEnumClassificationLevelFilter<$PrismaModel> | $Enums.ClassificationLevel
  }

  export type EnumIntelligenceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceSource | EnumIntelligenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceSource[]
    notIn?: $Enums.IntelligenceSource[]
    not?: NestedEnumIntelligenceSourceFilter<$PrismaModel> | $Enums.IntelligenceSource
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type IntelligenceReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classification?: SortOrder
    source?: SortOrder
    location?: SortOrder
    threatLevel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntelligenceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classification?: SortOrder
    source?: SortOrder
    location?: SortOrder
    threatLevel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntelligenceReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classification?: SortOrder
    source?: SortOrder
    location?: SortOrder
    threatLevel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumClassificationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationLevel | EnumClassificationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationLevel[]
    notIn?: $Enums.ClassificationLevel[]
    not?: NestedEnumClassificationLevelWithAggregatesFilter<$PrismaModel> | $Enums.ClassificationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassificationLevelFilter<$PrismaModel>
    _max?: NestedEnumClassificationLevelFilter<$PrismaModel>
  }

  export type EnumIntelligenceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceSource | EnumIntelligenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceSource[]
    notIn?: $Enums.IntelligenceSource[]
    not?: NestedEnumIntelligenceSourceWithAggregatesFilter<$PrismaModel> | $Enums.IntelligenceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntelligenceSourceFilter<$PrismaModel>
    _max?: NestedEnumIntelligenceSourceFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[]
    notIn?: $Enums.OperationStatus[]
    not?: NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus
  }

  export type EnumPriorityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityLevel | EnumPriorityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityLevel[]
    notIn?: $Enums.PriorityLevel[]
    not?: NestedEnumPriorityLevelFilter<$PrismaModel> | $Enums.PriorityLevel
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    progress?: SortOrder
    objectives?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    progress?: SortOrder
    objectives?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    progress?: SortOrder
    objectives?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[]
    notIn?: $Enums.OperationStatus[]
    not?: NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationStatusFilter<$PrismaModel>
  }

  export type EnumPriorityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityLevel | EnumPriorityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityLevel[]
    notIn?: $Enums.PriorityLevel[]
    not?: NestedEnumPriorityLevelWithAggregatesFilter<$PrismaModel> | $Enums.PriorityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityLevelFilter<$PrismaModel>
    _max?: NestedEnumPriorityLevelFilter<$PrismaModel>
  }

  export type OperationScalarRelationFilter = {
    is?: OperationWhereInput
    isNot?: OperationWhereInput
  }

  export type AgentOperationAgentIdOperationIdCompoundUniqueInput = {
    agentId: string
    operationId: string
  }

  export type AgentOperationCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    operationId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
  }

  export type AgentOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    operationId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
  }

  export type AgentOperationMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    operationId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumSystemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemType | EnumSystemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemType[]
    notIn?: $Enums.SystemType[]
    not?: NestedEnumSystemTypeFilter<$PrismaModel> | $Enums.SystemType
  }

  export type EnumSystemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemStatus | EnumSystemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemStatus[]
    notIn?: $Enums.SystemStatus[]
    not?: NestedEnumSystemStatusFilter<$PrismaModel> | $Enums.SystemStatus
  }

  export type SystemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    uptime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemAvgOrderByAggregateInput = {
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
  }

  export type SystemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    uptime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    uptime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSumOrderByAggregateInput = {
    health?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
  }

  export type EnumSystemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemType | EnumSystemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemType[]
    notIn?: $Enums.SystemType[]
    not?: NestedEnumSystemTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemTypeFilter<$PrismaModel>
  }

  export type EnumSystemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemStatus | EnumSystemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemStatus[]
    notIn?: $Enums.SystemStatus[]
    not?: NestedEnumSystemStatusWithAggregatesFilter<$PrismaModel> | $Enums.SystemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemStatusFilter<$PrismaModel>
    _max?: NestedEnumSystemStatusFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentOperationCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput> | AgentOperationCreateWithoutAgentInput[] | AgentOperationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutAgentInput | AgentOperationCreateOrConnectWithoutAgentInput[]
    createMany?: AgentOperationCreateManyAgentInputEnvelope
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
  }

  export type AgentActivityCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput> | AgentActivityCreateWithoutAgentInput[] | AgentActivityUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentActivityCreateOrConnectWithoutAgentInput | AgentActivityCreateOrConnectWithoutAgentInput[]
    createMany?: AgentActivityCreateManyAgentInputEnvelope
    connect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
  }

  export type AgentOperationUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput> | AgentOperationCreateWithoutAgentInput[] | AgentOperationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutAgentInput | AgentOperationCreateOrConnectWithoutAgentInput[]
    createMany?: AgentOperationCreateManyAgentInputEnvelope
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
  }

  export type AgentActivityUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput> | AgentActivityCreateWithoutAgentInput[] | AgentActivityUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentActivityCreateOrConnectWithoutAgentInput | AgentActivityCreateOrConnectWithoutAgentInput[]
    createMany?: AgentActivityCreateManyAgentInputEnvelope
    connect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAgentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgentStatus
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type AgentOperationUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput> | AgentOperationCreateWithoutAgentInput[] | AgentOperationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutAgentInput | AgentOperationCreateOrConnectWithoutAgentInput[]
    upsert?: AgentOperationUpsertWithWhereUniqueWithoutAgentInput | AgentOperationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentOperationCreateManyAgentInputEnvelope
    set?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    disconnect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    delete?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    update?: AgentOperationUpdateWithWhereUniqueWithoutAgentInput | AgentOperationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentOperationUpdateManyWithWhereWithoutAgentInput | AgentOperationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
  }

  export type AgentActivityUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput> | AgentActivityCreateWithoutAgentInput[] | AgentActivityUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentActivityCreateOrConnectWithoutAgentInput | AgentActivityCreateOrConnectWithoutAgentInput[]
    upsert?: AgentActivityUpsertWithWhereUniqueWithoutAgentInput | AgentActivityUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentActivityCreateManyAgentInputEnvelope
    set?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    disconnect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    delete?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    connect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    update?: AgentActivityUpdateWithWhereUniqueWithoutAgentInput | AgentActivityUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentActivityUpdateManyWithWhereWithoutAgentInput | AgentActivityUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentActivityScalarWhereInput | AgentActivityScalarWhereInput[]
  }

  export type AgentOperationUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput> | AgentOperationCreateWithoutAgentInput[] | AgentOperationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutAgentInput | AgentOperationCreateOrConnectWithoutAgentInput[]
    upsert?: AgentOperationUpsertWithWhereUniqueWithoutAgentInput | AgentOperationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentOperationCreateManyAgentInputEnvelope
    set?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    disconnect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    delete?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    update?: AgentOperationUpdateWithWhereUniqueWithoutAgentInput | AgentOperationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentOperationUpdateManyWithWhereWithoutAgentInput | AgentOperationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
  }

  export type AgentActivityUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput> | AgentActivityCreateWithoutAgentInput[] | AgentActivityUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentActivityCreateOrConnectWithoutAgentInput | AgentActivityCreateOrConnectWithoutAgentInput[]
    upsert?: AgentActivityUpsertWithWhereUniqueWithoutAgentInput | AgentActivityUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentActivityCreateManyAgentInputEnvelope
    set?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    disconnect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    delete?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    connect?: AgentActivityWhereUniqueInput | AgentActivityWhereUniqueInput[]
    update?: AgentActivityUpdateWithWhereUniqueWithoutAgentInput | AgentActivityUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentActivityUpdateManyWithWhereWithoutAgentInput | AgentActivityUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentActivityScalarWhereInput | AgentActivityScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<AgentCreateWithoutActivitiesInput, AgentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutActivitiesInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<AgentCreateWithoutActivitiesInput, AgentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutActivitiesInput
    upsert?: AgentUpsertWithoutActivitiesInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutActivitiesInput, AgentUpdateWithoutActivitiesInput>, AgentUncheckedUpdateWithoutActivitiesInput>
  }

  export type EnumClassificationLevelFieldUpdateOperationsInput = {
    set?: $Enums.ClassificationLevel
  }

  export type EnumIntelligenceSourceFieldUpdateOperationsInput = {
    set?: $Enums.IntelligenceSource
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type AgentOperationCreateNestedManyWithoutOperationInput = {
    create?: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput> | AgentOperationCreateWithoutOperationInput[] | AgentOperationUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutOperationInput | AgentOperationCreateOrConnectWithoutOperationInput[]
    createMany?: AgentOperationCreateManyOperationInputEnvelope
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
  }

  export type AgentOperationUncheckedCreateNestedManyWithoutOperationInput = {
    create?: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput> | AgentOperationCreateWithoutOperationInput[] | AgentOperationUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutOperationInput | AgentOperationCreateOrConnectWithoutOperationInput[]
    createMany?: AgentOperationCreateManyOperationInputEnvelope
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
  }

  export type EnumOperationStatusFieldUpdateOperationsInput = {
    set?: $Enums.OperationStatus
  }

  export type EnumPriorityLevelFieldUpdateOperationsInput = {
    set?: $Enums.PriorityLevel
  }

  export type AgentOperationUpdateManyWithoutOperationNestedInput = {
    create?: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput> | AgentOperationCreateWithoutOperationInput[] | AgentOperationUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutOperationInput | AgentOperationCreateOrConnectWithoutOperationInput[]
    upsert?: AgentOperationUpsertWithWhereUniqueWithoutOperationInput | AgentOperationUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: AgentOperationCreateManyOperationInputEnvelope
    set?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    disconnect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    delete?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    update?: AgentOperationUpdateWithWhereUniqueWithoutOperationInput | AgentOperationUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: AgentOperationUpdateManyWithWhereWithoutOperationInput | AgentOperationUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
  }

  export type AgentOperationUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput> | AgentOperationCreateWithoutOperationInput[] | AgentOperationUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: AgentOperationCreateOrConnectWithoutOperationInput | AgentOperationCreateOrConnectWithoutOperationInput[]
    upsert?: AgentOperationUpsertWithWhereUniqueWithoutOperationInput | AgentOperationUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: AgentOperationCreateManyOperationInputEnvelope
    set?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    disconnect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    delete?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    connect?: AgentOperationWhereUniqueInput | AgentOperationWhereUniqueInput[]
    update?: AgentOperationUpdateWithWhereUniqueWithoutOperationInput | AgentOperationUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: AgentOperationUpdateManyWithWhereWithoutOperationInput | AgentOperationUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutOperationsInput = {
    create?: XOR<AgentCreateWithoutOperationsInput, AgentUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutOperationsInput
    connect?: AgentWhereUniqueInput
  }

  export type OperationCreateNestedOneWithoutAgentsInput = {
    create?: XOR<OperationCreateWithoutAgentsInput, OperationUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OperationCreateOrConnectWithoutAgentsInput
    connect?: OperationWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<AgentCreateWithoutOperationsInput, AgentUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutOperationsInput
    upsert?: AgentUpsertWithoutOperationsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutOperationsInput, AgentUpdateWithoutOperationsInput>, AgentUncheckedUpdateWithoutOperationsInput>
  }

  export type OperationUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<OperationCreateWithoutAgentsInput, OperationUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OperationCreateOrConnectWithoutAgentsInput
    upsert?: OperationUpsertWithoutAgentsInput
    connect?: OperationWhereUniqueInput
    update?: XOR<XOR<OperationUpdateToOneWithWhereWithoutAgentsInput, OperationUpdateWithoutAgentsInput>, OperationUncheckedUpdateWithoutAgentsInput>
  }

  export type EnumSystemTypeFieldUpdateOperationsInput = {
    set?: $Enums.SystemType
  }

  export type EnumSystemStatusFieldUpdateOperationsInput = {
    set?: $Enums.SystemStatus
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumClassificationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationLevel | EnumClassificationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationLevel[]
    notIn?: $Enums.ClassificationLevel[]
    not?: NestedEnumClassificationLevelFilter<$PrismaModel> | $Enums.ClassificationLevel
  }

  export type NestedEnumIntelligenceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceSource | EnumIntelligenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceSource[]
    notIn?: $Enums.IntelligenceSource[]
    not?: NestedEnumIntelligenceSourceFilter<$PrismaModel> | $Enums.IntelligenceSource
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumClassificationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationLevel | EnumClassificationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationLevel[]
    notIn?: $Enums.ClassificationLevel[]
    not?: NestedEnumClassificationLevelWithAggregatesFilter<$PrismaModel> | $Enums.ClassificationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassificationLevelFilter<$PrismaModel>
    _max?: NestedEnumClassificationLevelFilter<$PrismaModel>
  }

  export type NestedEnumIntelligenceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceSource | EnumIntelligenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceSource[]
    notIn?: $Enums.IntelligenceSource[]
    not?: NestedEnumIntelligenceSourceWithAggregatesFilter<$PrismaModel> | $Enums.IntelligenceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntelligenceSourceFilter<$PrismaModel>
    _max?: NestedEnumIntelligenceSourceFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[]
    notIn?: $Enums.OperationStatus[]
    not?: NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus
  }

  export type NestedEnumPriorityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityLevel | EnumPriorityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityLevel[]
    notIn?: $Enums.PriorityLevel[]
    not?: NestedEnumPriorityLevelFilter<$PrismaModel> | $Enums.PriorityLevel
  }

  export type NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[]
    notIn?: $Enums.OperationStatus[]
    not?: NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityLevel | EnumPriorityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityLevel[]
    notIn?: $Enums.PriorityLevel[]
    not?: NestedEnumPriorityLevelWithAggregatesFilter<$PrismaModel> | $Enums.PriorityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityLevelFilter<$PrismaModel>
    _max?: NestedEnumPriorityLevelFilter<$PrismaModel>
  }

  export type NestedEnumSystemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemType | EnumSystemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemType[]
    notIn?: $Enums.SystemType[]
    not?: NestedEnumSystemTypeFilter<$PrismaModel> | $Enums.SystemType
  }

  export type NestedEnumSystemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemStatus | EnumSystemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemStatus[]
    notIn?: $Enums.SystemStatus[]
    not?: NestedEnumSystemStatusFilter<$PrismaModel> | $Enums.SystemStatus
  }

  export type NestedEnumSystemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemType | EnumSystemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemType[]
    notIn?: $Enums.SystemType[]
    not?: NestedEnumSystemTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemTypeFilter<$PrismaModel>
  }

  export type NestedEnumSystemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemStatus | EnumSystemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemStatus[]
    notIn?: $Enums.SystemStatus[]
    not?: NestedEnumSystemStatusWithAggregatesFilter<$PrismaModel> | $Enums.SystemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemStatusFilter<$PrismaModel>
    _max?: NestedEnumSystemStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgentOperationCreateWithoutAgentInput = {
    id?: string
    assignedAt?: Date | string
    role?: string | null
    operation: OperationCreateNestedOneWithoutAgentsInput
  }

  export type AgentOperationUncheckedCreateWithoutAgentInput = {
    id?: string
    operationId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentOperationCreateOrConnectWithoutAgentInput = {
    where: AgentOperationWhereUniqueInput
    create: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput>
  }

  export type AgentOperationCreateManyAgentInputEnvelope = {
    data: AgentOperationCreateManyAgentInput | AgentOperationCreateManyAgentInput[]
  }

  export type AgentActivityCreateWithoutAgentInput = {
    id?: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
  }

  export type AgentActivityUncheckedCreateWithoutAgentInput = {
    id?: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
  }

  export type AgentActivityCreateOrConnectWithoutAgentInput = {
    where: AgentActivityWhereUniqueInput
    create: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput>
  }

  export type AgentActivityCreateManyAgentInputEnvelope = {
    data: AgentActivityCreateManyAgentInput | AgentActivityCreateManyAgentInput[]
  }

  export type AgentOperationUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgentOperationWhereUniqueInput
    update: XOR<AgentOperationUpdateWithoutAgentInput, AgentOperationUncheckedUpdateWithoutAgentInput>
    create: XOR<AgentOperationCreateWithoutAgentInput, AgentOperationUncheckedCreateWithoutAgentInput>
  }

  export type AgentOperationUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgentOperationWhereUniqueInput
    data: XOR<AgentOperationUpdateWithoutAgentInput, AgentOperationUncheckedUpdateWithoutAgentInput>
  }

  export type AgentOperationUpdateManyWithWhereWithoutAgentInput = {
    where: AgentOperationScalarWhereInput
    data: XOR<AgentOperationUpdateManyMutationInput, AgentOperationUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentOperationScalarWhereInput = {
    AND?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
    OR?: AgentOperationScalarWhereInput[]
    NOT?: AgentOperationScalarWhereInput | AgentOperationScalarWhereInput[]
    id?: StringFilter<"AgentOperation"> | string
    agentId?: StringFilter<"AgentOperation"> | string
    operationId?: StringFilter<"AgentOperation"> | string
    assignedAt?: DateTimeFilter<"AgentOperation"> | Date | string
    role?: StringNullableFilter<"AgentOperation"> | string | null
  }

  export type AgentActivityUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgentActivityWhereUniqueInput
    update: XOR<AgentActivityUpdateWithoutAgentInput, AgentActivityUncheckedUpdateWithoutAgentInput>
    create: XOR<AgentActivityCreateWithoutAgentInput, AgentActivityUncheckedCreateWithoutAgentInput>
  }

  export type AgentActivityUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgentActivityWhereUniqueInput
    data: XOR<AgentActivityUpdateWithoutAgentInput, AgentActivityUncheckedUpdateWithoutAgentInput>
  }

  export type AgentActivityUpdateManyWithWhereWithoutAgentInput = {
    where: AgentActivityScalarWhereInput
    data: XOR<AgentActivityUpdateManyMutationInput, AgentActivityUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentActivityScalarWhereInput = {
    AND?: AgentActivityScalarWhereInput | AgentActivityScalarWhereInput[]
    OR?: AgentActivityScalarWhereInput[]
    NOT?: AgentActivityScalarWhereInput | AgentActivityScalarWhereInput[]
    id?: StringFilter<"AgentActivity"> | string
    agentId?: StringFilter<"AgentActivity"> | string
    action?: StringFilter<"AgentActivity"> | string
    location?: StringNullableFilter<"AgentActivity"> | string | null
    timestamp?: DateTimeFilter<"AgentActivity"> | Date | string
    details?: StringNullableFilter<"AgentActivity"> | string | null
  }

  export type AgentCreateWithoutActivitiesInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: AgentOperationCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutActivitiesInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: AgentOperationUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutActivitiesInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutActivitiesInput, AgentUncheckedCreateWithoutActivitiesInput>
  }

  export type AgentUpsertWithoutActivitiesInput = {
    update: XOR<AgentUpdateWithoutActivitiesInput, AgentUncheckedUpdateWithoutActivitiesInput>
    create: XOR<AgentCreateWithoutActivitiesInput, AgentUncheckedCreateWithoutActivitiesInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutActivitiesInput, AgentUncheckedUpdateWithoutActivitiesInput>
  }

  export type AgentUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: AgentOperationUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: AgentOperationUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentOperationCreateWithoutOperationInput = {
    id?: string
    assignedAt?: Date | string
    role?: string | null
    agent: AgentCreateNestedOneWithoutOperationsInput
  }

  export type AgentOperationUncheckedCreateWithoutOperationInput = {
    id?: string
    agentId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentOperationCreateOrConnectWithoutOperationInput = {
    where: AgentOperationWhereUniqueInput
    create: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput>
  }

  export type AgentOperationCreateManyOperationInputEnvelope = {
    data: AgentOperationCreateManyOperationInput | AgentOperationCreateManyOperationInput[]
  }

  export type AgentOperationUpsertWithWhereUniqueWithoutOperationInput = {
    where: AgentOperationWhereUniqueInput
    update: XOR<AgentOperationUpdateWithoutOperationInput, AgentOperationUncheckedUpdateWithoutOperationInput>
    create: XOR<AgentOperationCreateWithoutOperationInput, AgentOperationUncheckedCreateWithoutOperationInput>
  }

  export type AgentOperationUpdateWithWhereUniqueWithoutOperationInput = {
    where: AgentOperationWhereUniqueInput
    data: XOR<AgentOperationUpdateWithoutOperationInput, AgentOperationUncheckedUpdateWithoutOperationInput>
  }

  export type AgentOperationUpdateManyWithWhereWithoutOperationInput = {
    where: AgentOperationScalarWhereInput
    data: XOR<AgentOperationUpdateManyMutationInput, AgentOperationUncheckedUpdateManyWithoutOperationInput>
  }

  export type AgentCreateWithoutOperationsInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: AgentActivityCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutOperationsInput = {
    id: string
    codename: string
    status?: $Enums.AgentStatus
    riskLevel?: $Enums.RiskLevel
    location?: string | null
    lastSeen?: Date | string | null
    missionsCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: AgentActivityUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutOperationsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutOperationsInput, AgentUncheckedCreateWithoutOperationsInput>
  }

  export type OperationCreateWithoutAgentsInput = {
    id: string
    name: string
    status?: $Enums.OperationStatus
    priority?: $Enums.PriorityLevel
    location: string
    progress?: number
    objectives: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUncheckedCreateWithoutAgentsInput = {
    id: string
    name: string
    status?: $Enums.OperationStatus
    priority?: $Enums.PriorityLevel
    location: string
    progress?: number
    objectives: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutAgentsInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutAgentsInput, OperationUncheckedCreateWithoutAgentsInput>
  }

  export type AgentUpsertWithoutOperationsInput = {
    update: XOR<AgentUpdateWithoutOperationsInput, AgentUncheckedUpdateWithoutOperationsInput>
    create: XOR<AgentCreateWithoutOperationsInput, AgentUncheckedCreateWithoutOperationsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutOperationsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutOperationsInput, AgentUncheckedUpdateWithoutOperationsInput>
  }

  export type AgentUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: AgentActivityUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missionsCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: AgentActivityUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type OperationUpsertWithoutAgentsInput = {
    update: XOR<OperationUpdateWithoutAgentsInput, OperationUncheckedUpdateWithoutAgentsInput>
    create: XOR<OperationCreateWithoutAgentsInput, OperationUncheckedCreateWithoutAgentsInput>
    where?: OperationWhereInput
  }

  export type OperationUpdateToOneWithWhereWithoutAgentsInput = {
    where?: OperationWhereInput
    data: XOR<OperationUpdateWithoutAgentsInput, OperationUncheckedUpdateWithoutAgentsInput>
  }

  export type OperationUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    priority?: EnumPriorityLevelFieldUpdateOperationsInput | $Enums.PriorityLevel
    location?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    objectives?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentOperationCreateManyAgentInput = {
    id?: string
    operationId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentActivityCreateManyAgentInput = {
    id?: string
    action: string
    location?: string | null
    timestamp?: Date | string
    details?: string | null
  }

  export type AgentOperationUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: OperationUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentOperationUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentOperationUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentActivityUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentActivityUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentActivityUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentOperationCreateManyOperationInput = {
    id?: string
    agentId: string
    assignedAt?: Date | string
    role?: string | null
  }

  export type AgentOperationUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: AgentUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type AgentOperationUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentOperationUncheckedUpdateManyWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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