

import * as runtime from './runtime/library.js';
import $Types = runtime.Types 
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type User = $Result.DefaultSelection<Prisma.$UserPayload>
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
export type DamageReport = $Result.DefaultSelection<Prisma.$DamageReportPayload>

export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    
  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

    $connect(): $Utils.JsPromise<void>;

    $disconnect(): $Utils.JsPromise<void>;

    $use(cb: Prisma.Middleware): void

  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

        get user(): Prisma.UserDelegate<ExtArgs>;

    get car(): Prisma.CarDelegate<ExtArgs>;

    get booking(): Prisma.BookingDelegate<ExtArgs>;

    get damageReport(): Prisma.DamageReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

    export import validator = runtime.Public.validator

    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

    export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



    export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

    export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

    export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

    export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  

  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

    namespace NullTypes {
        class DbNull {
      private DbNull: never
      private constructor()
    }

        class JsonNull {
      private JsonNull: never
      private constructor()
    }

        class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

    export const DbNull: NullTypes.DbNull

    export const JsonNull: NullTypes.JsonNull

    export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

    export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

    export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

    export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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


    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  
  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      
      [P in K]: Prisma__Pick<O, P & keyof O> 
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

  
  type NoExpand<T> = T extends unknown ? T : never;

  
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  
  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    export type Boolean = True | False

  
  
  
  export type True = 1

    export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 
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
      ? 
        
        
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

    type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Car: 'Car',
    Booking: 'Booking',
    DamageReport: 'DamageReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "car" | "booking" | "damageReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      DamageReport: {
        payload: Prisma.$DamageReportPayload<ExtArgs>
        fields: Prisma.DamageReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DamageReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DamageReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          findFirst: {
            args: Prisma.DamageReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DamageReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          findMany: {
            args: Prisma.DamageReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>[]
          }
          create: {
            args: Prisma.DamageReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          createMany: {
            args: Prisma.DamageReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DamageReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>[]
          }
          delete: {
            args: Prisma.DamageReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          update: {
            args: Prisma.DamageReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          deleteMany: {
            args: Prisma.DamageReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DamageReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DamageReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamageReportPayload>
          }
          aggregate: {
            args: Prisma.DamageReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDamageReport>
          }
          groupBy: {
            args: Prisma.DamageReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DamageReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DamageReportCountArgs<ExtArgs>
            result: $Utils.Optional<DamageReportCountAggregateOutputType> | number
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
        datasources?: Datasources
        datasourceUrl?: string
        errorFormat?: ErrorFormat
        log?: (LogLevel | LogDefinition)[]
        transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


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

    export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

    export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  

  
  export type UserCountOutputType = {
    cars: number
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  
    export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

    export type UserCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

    export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  
  export type CarCountOutputType = {
    bookings: number
    damageReports: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CarCountOutputTypeCountBookingsArgs
    damageReports?: boolean | CarCountOutputTypeCountDamageReportsArgs
  }

  
    export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

    export type CarCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

    export type CarCountOutputTypeCountDamageReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DamageReportWhereInput
  }


  
  
  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: UserWhereInput
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        cursor?: UserWhereUniqueInput
        take?: number
        skip?: number
        _count?: true | UserCountAggregateInputType
        _min?: UserMinAggregateInputType
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
    password: string
    name: string
    role: string
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
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | User$carsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | User$carsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
        findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

        findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

        findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

        create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

        createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

        delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

        update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

        deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


        count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

        aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    readonly fields: UserFieldRefs;
  }

    export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends User$carsArgs<ExtArgs> = {}>(args?: Subset<T, User$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




   
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  
    export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where: UserWhereUniqueInput
  }

    export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where: UserWhereUniqueInput
  }

    export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where?: UserWhereInput
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        cursor?: UserWhereUniqueInput
        take?: number
        skip?: number
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

    export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where?: UserWhereInput
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        cursor?: UserWhereUniqueInput
        take?: number
        skip?: number
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

    export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where?: UserWhereInput
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        cursor?: UserWhereUniqueInput
        take?: number
        skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

    export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

    export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: UserCreateManyInput | UserCreateManyInput[]
  }

    export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null
        data: UserCreateManyInput | UserCreateManyInput[]
  }

    export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
        where: UserWhereUniqueInput
  }

    export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
        where?: UserWhereInput
  }

    export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where: UserWhereUniqueInput
        create: XOR<UserCreateInput, UserUncheckedCreateInput>
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

    export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
        where: UserWhereUniqueInput
  }

    export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: UserWhereInput
  }

    export type User$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

    export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

    export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: UserSelect<ExtArgs> | null
        include?: UserInclude<ExtArgs> | null
  }


  
  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
    pricePerDay: number | null
    kilometers: number | null
    rating: number | null
    passengers: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
    pricePerDay: number | null
    kilometers: number | null
    rating: number | null
    passengers: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    pricePerDay: number | null
    kilometers: number | null
    rating: number | null
    image: string | null
    availability: boolean | null
    terrain: string | null
    passengers: number | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    pricePerDay: number | null
    kilometers: number | null
    rating: number | null
    image: string | null
    availability: boolean | null
    terrain: string | null
    passengers: number | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    pricePerDay: number
    kilometers: number
    rating: number
    image: number
    availability: number
    terrain: number
    passengers: number
    description: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
    pricePerDay?: true
    kilometers?: true
    rating?: true
    passengers?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
    pricePerDay?: true
    kilometers?: true
    rating?: true
    passengers?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    pricePerDay?: true
    kilometers?: true
    rating?: true
    image?: true
    availability?: true
    terrain?: true
    passengers?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    pricePerDay?: true
    kilometers?: true
    rating?: true
    image?: true
    availability?: true
    terrain?: true
    passengers?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    pricePerDay?: true
    kilometers?: true
    rating?: true
    image?: true
    availability?: true
    terrain?: true
    passengers?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: CarWhereInput
        orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
        cursor?: CarWhereUniqueInput
        take?: number
        skip?: number
        _count?: true | CarCountAggregateInputType
        _avg?: CarAvgAggregateInputType
        _sum?: CarSumAggregateInputType
        _min?: CarMinAggregateInputType
        _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating: number
    image: string
    availability: boolean
    terrain: string
    passengers: number
    description: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    pricePerDay?: boolean
    kilometers?: boolean
    rating?: boolean
    image?: boolean
    availability?: boolean
    terrain?: boolean
    passengers?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Car$bookingsArgs<ExtArgs>
    damageReports?: boolean | Car$damageReportsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    pricePerDay?: boolean
    kilometers?: boolean
    rating?: boolean
    image?: boolean
    availability?: boolean
    terrain?: boolean
    passengers?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    pricePerDay?: boolean
    kilometers?: boolean
    rating?: boolean
    image?: boolean
    availability?: boolean
    terrain?: boolean
    passengers?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Car$bookingsArgs<ExtArgs>
    damageReports?: boolean | Car$damageReportsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      damageReports: Prisma.$DamageReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      year: number
      pricePerDay: number
      kilometers: number
      rating: number
      image: string
      availability: boolean
      terrain: string
      passengers: number
      description: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
        findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

        findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

        findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

        findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

        findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany">>

        create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create">, never, ExtArgs>

        createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn">>

        delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

        update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update">, never, ExtArgs>

        deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


        count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

        aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

        groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    readonly fields: CarFieldRefs;
  }

    export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookings<T extends Car$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Car$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    damageReports<T extends Car$damageReportsArgs<ExtArgs> = {}>(args?: Subset<T, Car$damageReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findMany"> | Null>
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




   
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly brand: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly pricePerDay: FieldRef<"Car", 'Float'>
    readonly kilometers: FieldRef<"Car", 'Int'>
    readonly rating: FieldRef<"Car", 'Float'>
    readonly image: FieldRef<"Car", 'String'>
    readonly availability: FieldRef<"Car", 'Boolean'>
    readonly terrain: FieldRef<"Car", 'String'>
    readonly passengers: FieldRef<"Car", 'Int'>
    readonly description: FieldRef<"Car", 'String'>
    readonly ownerId: FieldRef<"Car", 'String'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  
    export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where: CarWhereUniqueInput
  }

    export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where: CarWhereUniqueInput
  }

    export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where?: CarWhereInput
        orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
        cursor?: CarWhereUniqueInput
        take?: number
        skip?: number
        distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

    export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where?: CarWhereInput
        orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
        cursor?: CarWhereUniqueInput
        take?: number
        skip?: number
        distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

    export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where?: CarWhereInput
        orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
        cursor?: CarWhereUniqueInput
        take?: number
        skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

    export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

    export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: CarCreateManyInput | CarCreateManyInput[]
  }

    export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelectCreateManyAndReturn<ExtArgs> | null
        data: CarCreateManyInput | CarCreateManyInput[]
        include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

    export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
        where: CarWhereUniqueInput
  }

    export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
        where?: CarWhereInput
  }

    export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where: CarWhereUniqueInput
        create: XOR<CarCreateInput, CarUncheckedCreateInput>
        update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

    export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
        where: CarWhereUniqueInput
  }

    export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: CarWhereInput
  }

    export type Car$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

    export type Car$damageReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
    where?: DamageReportWhereInput
    orderBy?: DamageReportOrderByWithRelationInput | DamageReportOrderByWithRelationInput[]
    cursor?: DamageReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DamageReportScalarFieldEnum | DamageReportScalarFieldEnum[]
  }

    export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: CarSelect<ExtArgs> | null
        include?: CarInclude<ExtArgs> | null
  }


  
  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalCost: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalCost: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    totalCost: number | null
    status: string | null
    paymentPaid: boolean | null
    customerId: string | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    totalCost: number | null
    status: string | null
    paymentPaid: boolean | null
    customerId: string | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    totalCost: number
    status: number
    paymentPaid: number
    customerId: number
    carId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalCost?: true
  }

  export type BookingSumAggregateInputType = {
    totalCost?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    status?: true
    paymentPaid?: true
    customerId?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    status?: true
    paymentPaid?: true
    customerId?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    status?: true
    paymentPaid?: true
    customerId?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
        _count?: true | BookingCountAggregateInputType
        _avg?: BookingAvgAggregateInputType
        _sum?: BookingSumAggregateInputType
        _min?: BookingMinAggregateInputType
        _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    totalCost: number
    status: string
    paymentPaid: boolean
    customerId: string
    carId: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    status?: boolean
    paymentPaid?: boolean
    customerId?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    status?: boolean
    paymentPaid?: boolean
    customerId?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    status?: boolean
    paymentPaid?: boolean
    customerId?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      totalCost: number
      status: string
      paymentPaid: boolean
      customerId: string
      carId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
        findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

        findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

        findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

        findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

        findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

        create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

        createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

        delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

        update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

        deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


        count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

        aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

        groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    readonly fields: BookingFieldRefs;
  }

    export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




   
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly startDate: FieldRef<"Booking", 'DateTime'>
    readonly endDate: FieldRef<"Booking", 'DateTime'>
    readonly totalCost: FieldRef<"Booking", 'Float'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly paymentPaid: FieldRef<"Booking", 'Boolean'>
    readonly customerId: FieldRef<"Booking", 'String'>
    readonly carId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  
    export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where: BookingWhereUniqueInput
  }

    export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where: BookingWhereUniqueInput
  }

    export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

    export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

    export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

    export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

    export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: BookingCreateManyInput | BookingCreateManyInput[]
  }

    export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
        data: BookingCreateManyInput | BookingCreateManyInput[]
        include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

    export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
        where: BookingWhereUniqueInput
  }

    export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
        where?: BookingWhereInput
  }

    export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where: BookingWhereUniqueInput
        create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
        update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

    export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
        where: BookingWhereUniqueInput
  }

    export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: BookingWhereInput
  }

    export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: BookingSelect<ExtArgs> | null
        include?: BookingInclude<ExtArgs> | null
  }


  
  export type AggregateDamageReport = {
    _count: DamageReportCountAggregateOutputType | null
    _min: DamageReportMinAggregateOutputType | null
    _max: DamageReportMaxAggregateOutputType | null
  }

  export type DamageReportMinAggregateOutputType = {
    id: string | null
    description: string | null
    imageUrl: string | null
    date: Date | null
    carId: string | null
  }

  export type DamageReportMaxAggregateOutputType = {
    id: string | null
    description: string | null
    imageUrl: string | null
    date: Date | null
    carId: string | null
  }

  export type DamageReportCountAggregateOutputType = {
    id: number
    description: number
    imageUrl: number
    date: number
    carId: number
    _all: number
  }


  export type DamageReportMinAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    date?: true
    carId?: true
  }

  export type DamageReportMaxAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    date?: true
    carId?: true
  }

  export type DamageReportCountAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    date?: true
    carId?: true
    _all?: true
  }

  export type DamageReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: DamageReportWhereInput
        orderBy?: DamageReportOrderByWithRelationInput | DamageReportOrderByWithRelationInput[]
        cursor?: DamageReportWhereUniqueInput
        take?: number
        skip?: number
        _count?: true | DamageReportCountAggregateInputType
        _min?: DamageReportMinAggregateInputType
        _max?: DamageReportMaxAggregateInputType
  }

  export type GetDamageReportAggregateType<T extends DamageReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDamageReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDamageReport[P]>
      : GetScalarType<T[P], AggregateDamageReport[P]>
  }




  export type DamageReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DamageReportWhereInput
    orderBy?: DamageReportOrderByWithAggregationInput | DamageReportOrderByWithAggregationInput[]
    by: DamageReportScalarFieldEnum[] | DamageReportScalarFieldEnum
    having?: DamageReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DamageReportCountAggregateInputType | true
    _min?: DamageReportMinAggregateInputType
    _max?: DamageReportMaxAggregateInputType
  }

  export type DamageReportGroupByOutputType = {
    id: string
    description: string
    imageUrl: string | null
    date: Date
    carId: string
    _count: DamageReportCountAggregateOutputType | null
    _min: DamageReportMinAggregateOutputType | null
    _max: DamageReportMaxAggregateOutputType | null
  }

  type GetDamageReportGroupByPayload<T extends DamageReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DamageReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DamageReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DamageReportGroupByOutputType[P]>
            : GetScalarType<T[P], DamageReportGroupByOutputType[P]>
        }
      >
    >


  export type DamageReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    date?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damageReport"]>

  export type DamageReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    date?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damageReport"]>

  export type DamageReportSelectScalar = {
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    date?: boolean
    carId?: boolean
  }

  export type DamageReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type DamageReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $DamageReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DamageReport"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      imageUrl: string | null
      date: Date
      carId: string
    }, ExtArgs["result"]["damageReport"]>
    composites: {}
  }

  type DamageReportGetPayload<S extends boolean | null | undefined | DamageReportDefaultArgs> = $Result.GetResult<Prisma.$DamageReportPayload, S>

  type DamageReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DamageReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DamageReportCountAggregateInputType | true
    }

  export interface DamageReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DamageReport'], meta: { name: 'DamageReport' } }
        findUnique<T extends DamageReportFindUniqueArgs>(args: SelectSubset<T, DamageReportFindUniqueArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

        findUniqueOrThrow<T extends DamageReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DamageReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

        findFirst<T extends DamageReportFindFirstArgs>(args?: SelectSubset<T, DamageReportFindFirstArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

        findFirstOrThrow<T extends DamageReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DamageReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

        findMany<T extends DamageReportFindManyArgs>(args?: SelectSubset<T, DamageReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "findMany">>

        create<T extends DamageReportCreateArgs>(args: SelectSubset<T, DamageReportCreateArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

        createMany<T extends DamageReportCreateManyArgs>(args?: SelectSubset<T, DamageReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        createManyAndReturn<T extends DamageReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DamageReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "createManyAndReturn">>

        delete<T extends DamageReportDeleteArgs>(args: SelectSubset<T, DamageReportDeleteArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

        update<T extends DamageReportUpdateArgs>(args: SelectSubset<T, DamageReportUpdateArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

        deleteMany<T extends DamageReportDeleteManyArgs>(args?: SelectSubset<T, DamageReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        updateMany<T extends DamageReportUpdateManyArgs>(args: SelectSubset<T, DamageReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        upsert<T extends DamageReportUpsertArgs>(args: SelectSubset<T, DamageReportUpsertArgs<ExtArgs>>): Prisma__DamageReportClient<$Result.GetResult<Prisma.$DamageReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


        count<T extends DamageReportCountArgs>(
      args?: Subset<T, DamageReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DamageReportCountAggregateOutputType>
        : number
    >

        aggregate<T extends DamageReportAggregateArgs>(args: Subset<T, DamageReportAggregateArgs>): Prisma.PrismaPromise<GetDamageReportAggregateType<T>>

        groupBy<
      T extends DamageReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DamageReportGroupByArgs['orderBy'] }
        : { orderBy?: DamageReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DamageReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDamageReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    readonly fields: DamageReportFieldRefs;
  }

    export interface Prisma__DamageReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




   
  interface DamageReportFieldRefs {
    readonly id: FieldRef<"DamageReport", 'String'>
    readonly description: FieldRef<"DamageReport", 'String'>
    readonly imageUrl: FieldRef<"DamageReport", 'String'>
    readonly date: FieldRef<"DamageReport", 'DateTime'>
    readonly carId: FieldRef<"DamageReport", 'String'>
  }
    

  
    export type DamageReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where: DamageReportWhereUniqueInput
  }

    export type DamageReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where: DamageReportWhereUniqueInput
  }

    export type DamageReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where?: DamageReportWhereInput
        orderBy?: DamageReportOrderByWithRelationInput | DamageReportOrderByWithRelationInput[]
        cursor?: DamageReportWhereUniqueInput
        take?: number
        skip?: number
        distinct?: DamageReportScalarFieldEnum | DamageReportScalarFieldEnum[]
  }

    export type DamageReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where?: DamageReportWhereInput
        orderBy?: DamageReportOrderByWithRelationInput | DamageReportOrderByWithRelationInput[]
        cursor?: DamageReportWhereUniqueInput
        take?: number
        skip?: number
        distinct?: DamageReportScalarFieldEnum | DamageReportScalarFieldEnum[]
  }

    export type DamageReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where?: DamageReportWhereInput
        orderBy?: DamageReportOrderByWithRelationInput | DamageReportOrderByWithRelationInput[]
        cursor?: DamageReportWhereUniqueInput
        take?: number
        skip?: number
    distinct?: DamageReportScalarFieldEnum | DamageReportScalarFieldEnum[]
  }

    export type DamageReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        data: XOR<DamageReportCreateInput, DamageReportUncheckedCreateInput>
  }

    export type DamageReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: DamageReportCreateManyInput | DamageReportCreateManyInput[]
  }

    export type DamageReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelectCreateManyAndReturn<ExtArgs> | null
        data: DamageReportCreateManyInput | DamageReportCreateManyInput[]
        include?: DamageReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

    export type DamageReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        data: XOR<DamageReportUpdateInput, DamageReportUncheckedUpdateInput>
        where: DamageReportWhereUniqueInput
  }

    export type DamageReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        data: XOR<DamageReportUpdateManyMutationInput, DamageReportUncheckedUpdateManyInput>
        where?: DamageReportWhereInput
  }

    export type DamageReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where: DamageReportWhereUniqueInput
        create: XOR<DamageReportCreateInput, DamageReportUncheckedCreateInput>
        update: XOR<DamageReportUpdateInput, DamageReportUncheckedUpdateInput>
  }

    export type DamageReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
        where: DamageReportWhereUniqueInput
  }

    export type DamageReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: DamageReportWhereInput
  }

    export type DamageReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        select?: DamageReportSelect<ExtArgs> | null
        include?: DamageReportInclude<ExtArgs> | null
  }


  
  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    pricePerDay: 'pricePerDay',
    kilometers: 'kilometers',
    rating: 'rating',
    image: 'image',
    availability: 'availability',
    terrain: 'terrain',
    passengers: 'passengers',
    description: 'description',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    totalCost: 'totalCost',
    status: 'status',
    paymentPaid: 'paymentPaid',
    customerId: 'customerId',
    carId: 'carId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const DamageReportScalarFieldEnum: {
    id: 'id',
    description: 'description',
    imageUrl: 'imageUrl',
    date: 'date',
    carId: 'carId'
  };

  export type DamageReportScalarFieldEnum = (typeof DamageReportScalarFieldEnum)[keyof typeof DamageReportScalarFieldEnum]


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


  

    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    pricePerDay?: FloatFilter<"Car"> | number
    kilometers?: IntFilter<"Car"> | number
    rating?: FloatFilter<"Car"> | number
    image?: StringFilter<"Car"> | string
    availability?: BoolFilter<"Car"> | boolean
    terrain?: StringFilter<"Car"> | string
    passengers?: IntFilter<"Car"> | number
    description?: StringNullableFilter<"Car"> | string | null
    ownerId?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    damageReports?: DamageReportListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    availability?: SortOrder
    terrain?: SortOrder
    passengers?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    damageReports?: DamageReportOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    pricePerDay?: FloatFilter<"Car"> | number
    kilometers?: IntFilter<"Car"> | number
    rating?: FloatFilter<"Car"> | number
    image?: StringFilter<"Car"> | string
    availability?: BoolFilter<"Car"> | boolean
    terrain?: StringFilter<"Car"> | string
    passengers?: IntFilter<"Car"> | number
    description?: StringNullableFilter<"Car"> | string | null
    ownerId?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    damageReports?: DamageReportListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    availability?: SortOrder
    terrain?: SortOrder
    passengers?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    brand?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    pricePerDay?: FloatWithAggregatesFilter<"Car"> | number
    kilometers?: IntWithAggregatesFilter<"Car"> | number
    rating?: FloatWithAggregatesFilter<"Car"> | number
    image?: StringWithAggregatesFilter<"Car"> | string
    availability?: BoolWithAggregatesFilter<"Car"> | boolean
    terrain?: StringWithAggregatesFilter<"Car"> | string
    passengers?: IntWithAggregatesFilter<"Car"> | number
    description?: StringNullableWithAggregatesFilter<"Car"> | string | null
    ownerId?: StringWithAggregatesFilter<"Car"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalCost?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentPaid?: BoolFilter<"Booking"> | boolean
    customerId?: StringFilter<"Booking"> | string
    carId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    car?: XOR<CarRelationFilter, CarWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    paymentPaid?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalCost?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentPaid?: BoolFilter<"Booking"> | boolean
    customerId?: StringFilter<"Booking"> | string
    carId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    car?: XOR<CarRelationFilter, CarWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    paymentPaid?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    startDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalCost?: FloatWithAggregatesFilter<"Booking"> | number
    status?: StringWithAggregatesFilter<"Booking"> | string
    paymentPaid?: BoolWithAggregatesFilter<"Booking"> | boolean
    customerId?: StringWithAggregatesFilter<"Booking"> | string
    carId?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type DamageReportWhereInput = {
    AND?: DamageReportWhereInput | DamageReportWhereInput[]
    OR?: DamageReportWhereInput[]
    NOT?: DamageReportWhereInput | DamageReportWhereInput[]
    id?: StringFilter<"DamageReport"> | string
    description?: StringFilter<"DamageReport"> | string
    imageUrl?: StringNullableFilter<"DamageReport"> | string | null
    date?: DateTimeFilter<"DamageReport"> | Date | string
    carId?: StringFilter<"DamageReport"> | string
    car?: XOR<CarRelationFilter, CarWhereInput>
  }

  export type DamageReportOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    carId?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type DamageReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DamageReportWhereInput | DamageReportWhereInput[]
    OR?: DamageReportWhereInput[]
    NOT?: DamageReportWhereInput | DamageReportWhereInput[]
    description?: StringFilter<"DamageReport"> | string
    imageUrl?: StringNullableFilter<"DamageReport"> | string | null
    date?: DateTimeFilter<"DamageReport"> | Date | string
    carId?: StringFilter<"DamageReport"> | string
    car?: XOR<CarRelationFilter, CarWhereInput>
  }, "id">

  export type DamageReportOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    carId?: SortOrder
    _count?: DamageReportCountOrderByAggregateInput
    _max?: DamageReportMaxOrderByAggregateInput
    _min?: DamageReportMinOrderByAggregateInput
  }

  export type DamageReportScalarWhereWithAggregatesInput = {
    AND?: DamageReportScalarWhereWithAggregatesInput | DamageReportScalarWhereWithAggregatesInput[]
    OR?: DamageReportScalarWhereWithAggregatesInput[]
    NOT?: DamageReportScalarWhereWithAggregatesInput | DamageReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DamageReport"> | string
    description?: StringWithAggregatesFilter<"DamageReport"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"DamageReport"> | string | null
    date?: DateTimeWithAggregatesFilter<"DamageReport"> | Date | string
    carId?: StringWithAggregatesFilter<"DamageReport"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCarsInput
    bookings?: BookingCreateNestedManyWithoutCarInput
    damageReports?: DamageReportCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCarInput
    damageReports?: DamageReportUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    bookings?: BookingUpdateManyWithoutCarNestedInput
    damageReports?: DamageReportUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCarNestedInput
    damageReports?: DamageReportUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutBookingsInput
    car: CarCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    customerId: string
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutBookingsNestedInput
    car?: CarUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    customerId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    customerId: string
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    customerId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DamageReportCreateInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
    car: CarCreateNestedOneWithoutDamageReportsInput
  }

  export type DamageReportUncheckedCreateInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
    carId: string
  }

  export type DamageReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutDamageReportsNestedInput
  }

  export type DamageReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: StringFieldUpdateOperationsInput | string
  }

  export type DamageReportCreateManyInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
    carId: string
  }

  export type DamageReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DamageReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: StringFieldUpdateOperationsInput | string
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

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DamageReportListRelationFilter = {
    every?: DamageReportWhereInput
    some?: DamageReportWhereInput
    none?: DamageReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DamageReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    availability?: SortOrder
    terrain?: SortOrder
    passengers?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    passengers?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    availability?: SortOrder
    terrain?: SortOrder
    passengers?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    availability?: SortOrder
    terrain?: SortOrder
    passengers?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
    pricePerDay?: SortOrder
    kilometers?: SortOrder
    rating?: SortOrder
    passengers?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    paymentPaid?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    paymentPaid?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    paymentPaid?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type DamageReportCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    carId?: SortOrder
  }

  export type DamageReportMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    carId?: SortOrder
  }

  export type DamageReportMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    carId?: SortOrder
  }

  export type CarCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutOwnerInput | CarUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutOwnerInput | CarUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutOwnerInput | CarUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutOwnerInput | CarUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutOwnerInput | CarUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutOwnerInput | CarUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCarsInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput> | BookingCreateWithoutCarInput[] | BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCarInput | BookingCreateOrConnectWithoutCarInput[]
    createMany?: BookingCreateManyCarInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DamageReportCreateNestedManyWithoutCarInput = {
    create?: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput> | DamageReportCreateWithoutCarInput[] | DamageReportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: DamageReportCreateOrConnectWithoutCarInput | DamageReportCreateOrConnectWithoutCarInput[]
    createMany?: DamageReportCreateManyCarInputEnvelope
    connect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput> | BookingCreateWithoutCarInput[] | BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCarInput | BookingCreateOrConnectWithoutCarInput[]
    createMany?: BookingCreateManyCarInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DamageReportUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput> | DamageReportCreateWithoutCarInput[] | DamageReportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: DamageReportCreateOrConnectWithoutCarInput | DamageReportCreateOrConnectWithoutCarInput[]
    createMany?: DamageReportCreateManyCarInputEnvelope
    connect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    upsert?: UserUpsertWithoutCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarsInput, UserUpdateWithoutCarsInput>, UserUncheckedUpdateWithoutCarsInput>
  }

  export type BookingUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput> | BookingCreateWithoutCarInput[] | BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCarInput | BookingCreateOrConnectWithoutCarInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCarInput | BookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingCreateManyCarInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCarInput | BookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCarInput | BookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type DamageReportUpdateManyWithoutCarNestedInput = {
    create?: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput> | DamageReportCreateWithoutCarInput[] | DamageReportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: DamageReportCreateOrConnectWithoutCarInput | DamageReportCreateOrConnectWithoutCarInput[]
    upsert?: DamageReportUpsertWithWhereUniqueWithoutCarInput | DamageReportUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: DamageReportCreateManyCarInputEnvelope
    set?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    disconnect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    delete?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    connect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    update?: DamageReportUpdateWithWhereUniqueWithoutCarInput | DamageReportUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: DamageReportUpdateManyWithWhereWithoutCarInput | DamageReportUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: DamageReportScalarWhereInput | DamageReportScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput> | BookingCreateWithoutCarInput[] | BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCarInput | BookingCreateOrConnectWithoutCarInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCarInput | BookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingCreateManyCarInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCarInput | BookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCarInput | BookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type DamageReportUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput> | DamageReportCreateWithoutCarInput[] | DamageReportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: DamageReportCreateOrConnectWithoutCarInput | DamageReportCreateOrConnectWithoutCarInput[]
    upsert?: DamageReportUpsertWithWhereUniqueWithoutCarInput | DamageReportUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: DamageReportCreateManyCarInputEnvelope
    set?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    disconnect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    delete?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    connect?: DamageReportWhereUniqueInput | DamageReportWhereUniqueInput[]
    update?: DamageReportUpdateWithWhereUniqueWithoutCarInput | DamageReportUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: DamageReportUpdateManyWithWhereWithoutCarInput | DamageReportUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: DamageReportScalarWhereInput | DamageReportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CarCreateWithoutBookingsInput, CarUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutBookingsInput
    connect?: CarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type CarUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CarCreateWithoutBookingsInput, CarUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutBookingsInput
    upsert?: CarUpsertWithoutBookingsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutBookingsInput, CarUpdateWithoutBookingsInput>, CarUncheckedUpdateWithoutBookingsInput>
  }

  export type CarCreateNestedOneWithoutDamageReportsInput = {
    create?: XOR<CarCreateWithoutDamageReportsInput, CarUncheckedCreateWithoutDamageReportsInput>
    connectOrCreate?: CarCreateOrConnectWithoutDamageReportsInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutDamageReportsNestedInput = {
    create?: XOR<CarCreateWithoutDamageReportsInput, CarUncheckedCreateWithoutDamageReportsInput>
    connectOrCreate?: CarCreateOrConnectWithoutDamageReportsInput
    upsert?: CarUpsertWithoutDamageReportsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutDamageReportsInput, CarUpdateWithoutDamageReportsInput>, CarUncheckedUpdateWithoutDamageReportsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CarCreateWithoutOwnerInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCarInput
    damageReports?: DamageReportCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutOwnerInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCarInput
    damageReports?: DamageReportUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutOwnerInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarCreateManyOwnerInputEnvelope = {
    data: CarCreateManyOwnerInput | CarCreateManyOwnerInput[]
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
  }

  export type CarUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
  }

  export type CarUpdateManyWithWhereWithoutOwnerInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    pricePerDay?: FloatFilter<"Car"> | number
    kilometers?: IntFilter<"Car"> | number
    rating?: FloatFilter<"Car"> | number
    image?: StringFilter<"Car"> | string
    availability?: BoolFilter<"Car"> | boolean
    terrain?: StringFilter<"Car"> | string
    passengers?: IntFilter<"Car"> | number
    description?: StringNullableFilter<"Car"> | string | null
    ownerId?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalCost?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentPaid?: BoolFilter<"Booking"> | boolean
    customerId?: StringFilter<"Booking"> | string
    carId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type UserCreateWithoutCarsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
  }

  export type BookingCreateWithoutCarInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCarInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCarInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput>
  }

  export type BookingCreateManyCarInputEnvelope = {
    data: BookingCreateManyCarInput | BookingCreateManyCarInput[]
  }

  export type DamageReportCreateWithoutCarInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
  }

  export type DamageReportUncheckedCreateWithoutCarInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
  }

  export type DamageReportCreateOrConnectWithoutCarInput = {
    where: DamageReportWhereUniqueInput
    create: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput>
  }

  export type DamageReportCreateManyCarInputEnvelope = {
    data: DamageReportCreateManyCarInput | DamageReportCreateManyCarInput[]
  }

  export type UserUpsertWithoutCarsInput = {
    update: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutCarInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCarInput, BookingUncheckedUpdateWithoutCarInput>
    create: XOR<BookingCreateWithoutCarInput, BookingUncheckedCreateWithoutCarInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCarInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCarInput, BookingUncheckedUpdateWithoutCarInput>
  }

  export type BookingUpdateManyWithWhereWithoutCarInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCarInput>
  }

  export type DamageReportUpsertWithWhereUniqueWithoutCarInput = {
    where: DamageReportWhereUniqueInput
    update: XOR<DamageReportUpdateWithoutCarInput, DamageReportUncheckedUpdateWithoutCarInput>
    create: XOR<DamageReportCreateWithoutCarInput, DamageReportUncheckedCreateWithoutCarInput>
  }

  export type DamageReportUpdateWithWhereUniqueWithoutCarInput = {
    where: DamageReportWhereUniqueInput
    data: XOR<DamageReportUpdateWithoutCarInput, DamageReportUncheckedUpdateWithoutCarInput>
  }

  export type DamageReportUpdateManyWithWhereWithoutCarInput = {
    where: DamageReportScalarWhereInput
    data: XOR<DamageReportUpdateManyMutationInput, DamageReportUncheckedUpdateManyWithoutCarInput>
  }

  export type DamageReportScalarWhereInput = {
    AND?: DamageReportScalarWhereInput | DamageReportScalarWhereInput[]
    OR?: DamageReportScalarWhereInput[]
    NOT?: DamageReportScalarWhereInput | DamageReportScalarWhereInput[]
    id?: StringFilter<"DamageReport"> | string
    description?: StringFilter<"DamageReport"> | string
    imageUrl?: StringNullableFilter<"DamageReport"> | string | null
    date?: DateTimeFilter<"DamageReport"> | Date | string
    carId?: StringFilter<"DamageReport"> | string
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type CarCreateWithoutBookingsInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCarsInput
    damageReports?: DamageReportCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutBookingsInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    damageReports?: DamageReportUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutBookingsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutBookingsInput, CarUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CarUpsertWithoutBookingsInput = {
    update: XOR<CarUpdateWithoutBookingsInput, CarUncheckedUpdateWithoutBookingsInput>
    create: XOR<CarCreateWithoutBookingsInput, CarUncheckedCreateWithoutBookingsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutBookingsInput, CarUncheckedUpdateWithoutBookingsInput>
  }

  export type CarUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    damageReports?: DamageReportUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    damageReports?: DamageReportUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutDamageReportsInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCarsInput
    bookings?: BookingCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutDamageReportsInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutDamageReportsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutDamageReportsInput, CarUncheckedCreateWithoutDamageReportsInput>
  }

  export type CarUpsertWithoutDamageReportsInput = {
    update: XOR<CarUpdateWithoutDamageReportsInput, CarUncheckedUpdateWithoutDamageReportsInput>
    create: XOR<CarCreateWithoutDamageReportsInput, CarUncheckedCreateWithoutDamageReportsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutDamageReportsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutDamageReportsInput, CarUncheckedUpdateWithoutDamageReportsInput>
  }

  export type CarUpdateWithoutDamageReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    bookings?: BookingUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutDamageReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyOwnerInput = {
    id?: string
    brand: string
    model: string
    year: number
    pricePerDay: number
    kilometers: number
    rating?: number
    image: string
    availability?: boolean
    terrain?: string
    passengers?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCarNestedInput
    damageReports?: DamageReportUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCarNestedInput
    damageReports?: DamageReportUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    terrain?: StringFieldUpdateOperationsInput | string
    passengers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCarInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalCost: number
    status?: string
    paymentPaid?: boolean
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DamageReportCreateManyCarInput = {
    id?: string
    description: string
    imageUrl?: string | null
    date?: Date | string
  }

  export type BookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentPaid?: BoolFieldUpdateOperationsInput | boolean
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DamageReportUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DamageReportUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DamageReportUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



          export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
        export type CarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarCountOutputTypeDefaultArgs<ExtArgs>
        export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
        export type CarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarDefaultArgs<ExtArgs>
        export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
        export type DamageReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DamageReportDefaultArgs<ExtArgs>

  
  export type BatchPayload = {
    count: number
  }

    export const dmmf: runtime.BaseDMMF
}