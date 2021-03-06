import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListAliases} from '../model/ListAliases';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListAliasesInput} from '../types/ListAliasesInput';
import {ListAliasesOutput} from '../types/ListAliasesOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class ListAliasesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListAliasesInput,
    OutputTypesUnion,
    ListAliasesOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListAliasesInput,
        ListAliasesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListAliasesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<ListAliasesInput, ListAliasesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListAliases
        };

        return stack.resolve(
            handler<ListAliasesInput, ListAliasesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}