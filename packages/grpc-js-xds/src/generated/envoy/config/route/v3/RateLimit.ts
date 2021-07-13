// Original file: deps/envoy-api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { HeaderMatcher as _envoy_config_route_v3_HeaderMatcher, HeaderMatcher__Output as _envoy_config_route_v3_HeaderMatcher__Output } from '../../../../envoy/config/route/v3/HeaderMatcher';
import type { MetadataKey as _envoy_type_metadata_v3_MetadataKey, MetadataKey__Output as _envoy_type_metadata_v3_MetadataKey__Output } from '../../../../envoy/type/metadata/v3/MetadataKey';

/**
 * [#next-free-field: 10]
 */
export interface _envoy_config_route_v3_RateLimit_Action {
  /**
   * Rate limit on source cluster.
   */
  'source_cluster'?: (_envoy_config_route_v3_RateLimit_Action_SourceCluster);
  /**
   * Rate limit on destination cluster.
   */
  'destination_cluster'?: (_envoy_config_route_v3_RateLimit_Action_DestinationCluster);
  /**
   * Rate limit on request headers.
   */
  'request_headers'?: (_envoy_config_route_v3_RateLimit_Action_RequestHeaders);
  /**
   * Rate limit on remote address.
   */
  'remote_address'?: (_envoy_config_route_v3_RateLimit_Action_RemoteAddress);
  /**
   * Rate limit on a generic key.
   */
  'generic_key'?: (_envoy_config_route_v3_RateLimit_Action_GenericKey);
  /**
   * Rate limit on the existence of request headers.
   */
  'header_value_match'?: (_envoy_config_route_v3_RateLimit_Action_HeaderValueMatch);
  /**
   * Rate limit on dynamic metadata.
   * 
   * .. attention::
   * This field has been deprecated in favor of the :ref:`metadata <envoy_api_field_config.route.v3.RateLimit.Action.metadata>` field
   */
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Action_DynamicMetaData);
  /**
   * Rate limit on metadata.
   */
  'metadata'?: (_envoy_config_route_v3_RateLimit_Action_MetaData);
  /**
   * Rate limit descriptor extension. See the rate limit descriptor extensions documentation.
   */
  'extension'?: (_envoy_config_core_v3_TypedExtensionConfig);
  'action_specifier'?: "source_cluster"|"destination_cluster"|"request_headers"|"remote_address"|"generic_key"|"header_value_match"|"dynamic_metadata"|"metadata"|"extension";
}

/**
 * [#next-free-field: 10]
 */
export interface _envoy_config_route_v3_RateLimit_Action__Output {
  /**
   * Rate limit on source cluster.
   */
  'source_cluster'?: (_envoy_config_route_v3_RateLimit_Action_SourceCluster__Output);
  /**
   * Rate limit on destination cluster.
   */
  'destination_cluster'?: (_envoy_config_route_v3_RateLimit_Action_DestinationCluster__Output);
  /**
   * Rate limit on request headers.
   */
  'request_headers'?: (_envoy_config_route_v3_RateLimit_Action_RequestHeaders__Output);
  /**
   * Rate limit on remote address.
   */
  'remote_address'?: (_envoy_config_route_v3_RateLimit_Action_RemoteAddress__Output);
  /**
   * Rate limit on a generic key.
   */
  'generic_key'?: (_envoy_config_route_v3_RateLimit_Action_GenericKey__Output);
  /**
   * Rate limit on the existence of request headers.
   */
  'header_value_match'?: (_envoy_config_route_v3_RateLimit_Action_HeaderValueMatch__Output);
  /**
   * Rate limit on dynamic metadata.
   * 
   * .. attention::
   * This field has been deprecated in favor of the :ref:`metadata <envoy_api_field_config.route.v3.RateLimit.Action.metadata>` field
   */
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Action_DynamicMetaData__Output);
  /**
   * Rate limit on metadata.
   */
  'metadata'?: (_envoy_config_route_v3_RateLimit_Action_MetaData__Output);
  /**
   * Rate limit descriptor extension. See the rate limit descriptor extensions documentation.
   */
  'extension'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'action_specifier': "source_cluster"|"destination_cluster"|"request_headers"|"remote_address"|"generic_key"|"header_value_match"|"dynamic_metadata"|"metadata"|"extension";
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("destination_cluster", "<routed target cluster>")
 * 
 * Once a request matches against a route table rule, a routed cluster is determined by one of
 * the following :ref:`route table configuration <envoy_api_msg_config.route.v3.RouteConfiguration>`
 * settings:
 * 
 * * :ref:`cluster <envoy_api_field_config.route.v3.RouteAction.cluster>` indicates the upstream cluster
 * to route to.
 * * :ref:`weighted_clusters <envoy_api_field_config.route.v3.RouteAction.weighted_clusters>`
 * chooses a cluster randomly from a set of clusters with attributed weight.
 * * :ref:`cluster_header <envoy_api_field_config.route.v3.RouteAction.cluster_header>` indicates which
 * header in the request contains the target cluster.
 */
export interface _envoy_config_route_v3_RateLimit_Action_DestinationCluster {
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("destination_cluster", "<routed target cluster>")
 * 
 * Once a request matches against a route table rule, a routed cluster is determined by one of
 * the following :ref:`route table configuration <envoy_api_msg_config.route.v3.RouteConfiguration>`
 * settings:
 * 
 * * :ref:`cluster <envoy_api_field_config.route.v3.RouteAction.cluster>` indicates the upstream cluster
 * to route to.
 * * :ref:`weighted_clusters <envoy_api_field_config.route.v3.RouteAction.weighted_clusters>`
 * chooses a cluster randomly from a set of clusters with attributed weight.
 * * :ref:`cluster_header <envoy_api_field_config.route.v3.RouteAction.cluster_header>` indicates which
 * header in the request contains the target cluster.
 */
export interface _envoy_config_route_v3_RateLimit_Action_DestinationCluster__Output {
}

/**
 * The following descriptor entry is appended when the
 * :ref:`dynamic metadata <well_known_dynamic_metadata>` contains a key value:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<value_queried_from_dynamic_metadata>")
 * 
 * .. attention::
 * This action has been deprecated in favor of the :ref:`metadata <envoy_api_msg_config.route.v3.RateLimit.Action.MetaData>` action
 */
export interface _envoy_config_route_v3_RateLimit_Action_DynamicMetaData {
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key'?: (string);
  /**
   * Metadata struct that defines the key and path to retrieve the string value. A match will
   * only happen if the value in the dynamic metadata is of type string.
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey);
  /**
   * An optional value to use if *metadata_key* is empty. If not set and
   * no value is present under the metadata_key then no descriptor is generated.
   */
  'default_value'?: (string);
}

/**
 * The following descriptor entry is appended when the
 * :ref:`dynamic metadata <well_known_dynamic_metadata>` contains a key value:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<value_queried_from_dynamic_metadata>")
 * 
 * .. attention::
 * This action has been deprecated in favor of the :ref:`metadata <envoy_api_msg_config.route.v3.RateLimit.Action.MetaData>` action
 */
export interface _envoy_config_route_v3_RateLimit_Action_DynamicMetaData__Output {
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key': (string);
  /**
   * Metadata struct that defines the key and path to retrieve the string value. A match will
   * only happen if the value in the dynamic metadata is of type string.
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
  /**
   * An optional value to use if *metadata_key* is empty. If not set and
   * no value is present under the metadata_key then no descriptor is generated.
   */
  'default_value': (string);
}

/**
 * Fetches the override from the dynamic metadata.
 */
export interface _envoy_config_route_v3_RateLimit_Override_DynamicMetadata {
  /**
   * Metadata struct that defines the key and path to retrieve the struct value.
   * The value must be a struct containing an integer "requests_per_unit" property
   * and a "unit" property with a value parseable to :ref:`RateLimitUnit
   * enum <envoy_api_enum_type.v3.RateLimitUnit>`
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey);
}

/**
 * Fetches the override from the dynamic metadata.
 */
export interface _envoy_config_route_v3_RateLimit_Override_DynamicMetadata__Output {
  /**
   * Metadata struct that defines the key and path to retrieve the struct value.
   * The value must be a struct containing an integer "requests_per_unit" property
   * and a "unit" property with a value parseable to :ref:`RateLimitUnit
   * enum <envoy_api_enum_type.v3.RateLimitUnit>`
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("generic_key", "<descriptor_value>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_GenericKey {
  /**
   * The value to use in the descriptor entry.
   */
  'descriptor_value'?: (string);
  /**
   * An optional key to use in the descriptor entry. If not set it defaults
   * to 'generic_key' as the descriptor key.
   */
  'descriptor_key'?: (string);
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("generic_key", "<descriptor_value>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_GenericKey__Output {
  /**
   * The value to use in the descriptor entry.
   */
  'descriptor_value': (string);
  /**
   * An optional key to use in the descriptor entry. If not set it defaults
   * to 'generic_key' as the descriptor key.
   */
  'descriptor_key': (string);
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("header_match", "<descriptor_value>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_HeaderValueMatch {
  /**
   * The value to use in the descriptor entry.
   */
  'descriptor_value'?: (string);
  /**
   * If set to true, the action will append a descriptor entry when the
   * request matches the headers. If set to false, the action will append a
   * descriptor entry when the request does not match the headers. The
   * default value is true.
   */
  'expect_match'?: (_google_protobuf_BoolValue);
  /**
   * Specifies a set of headers that the rate limit action should match
   * on. The action will check the request’s headers against all the
   * specified headers in the config. A match will happen if all the
   * headers in the config are present in the request with the same values
   * (or based on presence if the value field is not in the config).
   */
  'headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("header_match", "<descriptor_value>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_HeaderValueMatch__Output {
  /**
   * The value to use in the descriptor entry.
   */
  'descriptor_value': (string);
  /**
   * If set to true, the action will append a descriptor entry when the
   * request matches the headers. If set to false, the action will append a
   * descriptor entry when the request does not match the headers. The
   * default value is true.
   */
  'expect_match'?: (_google_protobuf_BoolValue__Output);
  /**
   * Specifies a set of headers that the rate limit action should match
   * on. The action will check the request’s headers against all the
   * specified headers in the config. A match will happen if all the
   * headers in the config are present in the request with the same values
   * (or based on presence if the value field is not in the config).
   */
  'headers': (_envoy_config_route_v3_HeaderMatcher__Output)[];
}

/**
 * The following descriptor entry is appended when the metadata contains a key value:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<value_queried_from_metadata>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_MetaData {
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key'?: (string);
  /**
   * Metadata struct that defines the key and path to retrieve the string value. A match will
   * only happen if the value in the metadata is of type string.
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey);
  /**
   * An optional value to use if *metadata_key* is empty. If not set and
   * no value is present under the metadata_key then no descriptor is generated.
   */
  'default_value'?: (string);
  /**
   * Source of metadata
   */
  'source'?: (_envoy_config_route_v3_RateLimit_Action_MetaData_Source | keyof typeof _envoy_config_route_v3_RateLimit_Action_MetaData_Source);
}

/**
 * The following descriptor entry is appended when the metadata contains a key value:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<value_queried_from_metadata>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_MetaData__Output {
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key': (string);
  /**
   * Metadata struct that defines the key and path to retrieve the string value. A match will
   * only happen if the value in the metadata is of type string.
   */
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
  /**
   * An optional value to use if *metadata_key* is empty. If not set and
   * no value is present under the metadata_key then no descriptor is generated.
   */
  'default_value': (string);
  /**
   * Source of metadata
   */
  'source': (keyof typeof _envoy_config_route_v3_RateLimit_Action_MetaData_Source);
}

export interface _envoy_config_route_v3_RateLimit_Override {
  /**
   * Limit override from dynamic metadata.
   */
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Override_DynamicMetadata);
  'override_specifier'?: "dynamic_metadata";
}

export interface _envoy_config_route_v3_RateLimit_Override__Output {
  /**
   * Limit override from dynamic metadata.
   */
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Override_DynamicMetadata__Output);
  'override_specifier': "dynamic_metadata";
}

/**
 * The following descriptor entry is appended to the descriptor and is populated using the
 * trusted address from :ref:`x-forwarded-for <config_http_conn_man_headers_x-forwarded-for>`:
 * 
 * .. code-block:: cpp
 * 
 * ("remote_address", "<trusted address from x-forwarded-for>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_RemoteAddress {
}

/**
 * The following descriptor entry is appended to the descriptor and is populated using the
 * trusted address from :ref:`x-forwarded-for <config_http_conn_man_headers_x-forwarded-for>`:
 * 
 * .. code-block:: cpp
 * 
 * ("remote_address", "<trusted address from x-forwarded-for>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_RemoteAddress__Output {
}

/**
 * The following descriptor entry is appended when a header contains a key that matches the
 * *header_name*:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<header_value_queried_from_header>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_RequestHeaders {
  /**
   * The header name to be queried from the request headers. The header’s
   * value is used to populate the value of the descriptor entry for the
   * descriptor_key.
   */
  'header_name'?: (string);
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key'?: (string);
  /**
   * If set to true, Envoy skips the descriptor while calling rate limiting service
   * when header is not present in the request. By default it skips calling the
   * rate limiting service if this header is not present in the request.
   */
  'skip_if_absent'?: (boolean);
}

/**
 * The following descriptor entry is appended when a header contains a key that matches the
 * *header_name*:
 * 
 * .. code-block:: cpp
 * 
 * ("<descriptor_key>", "<header_value_queried_from_header>")
 */
export interface _envoy_config_route_v3_RateLimit_Action_RequestHeaders__Output {
  /**
   * The header name to be queried from the request headers. The header’s
   * value is used to populate the value of the descriptor entry for the
   * descriptor_key.
   */
  'header_name': (string);
  /**
   * The key to use in the descriptor entry.
   */
  'descriptor_key': (string);
  /**
   * If set to true, Envoy skips the descriptor while calling rate limiting service
   * when header is not present in the request. By default it skips calling the
   * rate limiting service if this header is not present in the request.
   */
  'skip_if_absent': (boolean);
}

// Original file: deps/envoy-api/envoy/config/route/v3/route_components.proto

export enum _envoy_config_route_v3_RateLimit_Action_MetaData_Source {
  /**
   * Query :ref:`dynamic metadata <well_known_dynamic_metadata>`
   */
  DYNAMIC = 0,
  /**
   * Query :ref:`route entry metadata <envoy_api_field_config.route.v3.Route.metadata>`
   */
  ROUTE_ENTRY = 1,
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("source_cluster", "<local service cluster>")
 * 
 * <local service cluster> is derived from the :option:`--service-cluster` option.
 */
export interface _envoy_config_route_v3_RateLimit_Action_SourceCluster {
}

/**
 * The following descriptor entry is appended to the descriptor:
 * 
 * .. code-block:: cpp
 * 
 * ("source_cluster", "<local service cluster>")
 * 
 * <local service cluster> is derived from the :option:`--service-cluster` option.
 */
export interface _envoy_config_route_v3_RateLimit_Action_SourceCluster__Output {
}

/**
 * Global rate limiting :ref:`architecture overview <arch_overview_global_rate_limit>`.
 * Also applies to Local rate limiting :ref:`using descriptors <config_http_filters_local_rate_limit_descriptors>`.
 */
export interface RateLimit {
  /**
   * Refers to the stage set in the filter. The rate limit configuration only
   * applies to filters with the same stage number. The default stage number is
   * 0.
   * 
   * .. note::
   * 
   * The filter supports a range of 0 - 10 inclusively for stage numbers.
   */
  'stage'?: (_google_protobuf_UInt32Value);
  /**
   * The key to be set in runtime to disable this rate limit configuration.
   */
  'disable_key'?: (string);
  /**
   * A list of actions that are to be applied for this rate limit configuration.
   * Order matters as the actions are processed sequentially and the descriptor
   * is composed by appending descriptor entries in that sequence. If an action
   * cannot append a descriptor entry, no descriptor is generated for the
   * configuration. See :ref:`composing actions
   * <config_http_filters_rate_limit_composing_actions>` for additional documentation.
   */
  'actions'?: (_envoy_config_route_v3_RateLimit_Action)[];
  /**
   * An optional limit override to be appended to the descriptor produced by this
   * rate limit configuration. If the override value is invalid or cannot be resolved
   * from metadata, no override is provided. See :ref:`rate limit override
   * <config_http_filters_rate_limit_rate_limit_override>` for more information.
   */
  'limit'?: (_envoy_config_route_v3_RateLimit_Override);
}

/**
 * Global rate limiting :ref:`architecture overview <arch_overview_global_rate_limit>`.
 * Also applies to Local rate limiting :ref:`using descriptors <config_http_filters_local_rate_limit_descriptors>`.
 */
export interface RateLimit__Output {
  /**
   * Refers to the stage set in the filter. The rate limit configuration only
   * applies to filters with the same stage number. The default stage number is
   * 0.
   * 
   * .. note::
   * 
   * The filter supports a range of 0 - 10 inclusively for stage numbers.
   */
  'stage'?: (_google_protobuf_UInt32Value__Output);
  /**
   * The key to be set in runtime to disable this rate limit configuration.
   */
  'disable_key': (string);
  /**
   * A list of actions that are to be applied for this rate limit configuration.
   * Order matters as the actions are processed sequentially and the descriptor
   * is composed by appending descriptor entries in that sequence. If an action
   * cannot append a descriptor entry, no descriptor is generated for the
   * configuration. See :ref:`composing actions
   * <config_http_filters_rate_limit_composing_actions>` for additional documentation.
   */
  'actions': (_envoy_config_route_v3_RateLimit_Action__Output)[];
  /**
   * An optional limit override to be appended to the descriptor produced by this
   * rate limit configuration. If the override value is invalid or cannot be resolved
   * from metadata, no override is provided. See :ref:`rate limit override
   * <config_http_filters_rate_limit_rate_limit_override>` for more information.
   */
  'limit'?: (_envoy_config_route_v3_RateLimit_Override__Output);
}