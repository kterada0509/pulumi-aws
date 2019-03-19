# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class HealthCheck(pulumi.CustomResource):
    child_health_threshold: pulumi.Output[float]
    """
    The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
    """
    child_healthchecks: pulumi.Output[list]
    """
    For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
    """
    cloudwatch_alarm_name: pulumi.Output[str]
    """
    The name of the CloudWatch alarm.
    """
    cloudwatch_alarm_region: pulumi.Output[str]
    """
    The CloudWatchRegion that the CloudWatch alarm was created in.
    """
    enable_sni: pulumi.Output[bool]
    """
    A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
    """
    failure_threshold: pulumi.Output[float]
    """
    The number of consecutive health checks that an endpoint must pass or fail.
    """
    fqdn: pulumi.Output[str]
    """
    The fully qualified domain name of the endpoint to be checked.
    """
    insufficient_data_health_status: pulumi.Output[str]
    """
    The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
    """
    invert_healthcheck: pulumi.Output[bool]
    """
    A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
    """
    ip_address: pulumi.Output[str]
    """
    The IP address of the endpoint to be checked.
    """
    measure_latency: pulumi.Output[bool]
    """
    A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
    """
    port: pulumi.Output[float]
    """
    The port of the endpoint to be checked.
    """
    reference_name: pulumi.Output[str]
    """
    This is a reference name used in Caller Reference
    (helpful for identifying single health_check set amongst others)
    """
    regions: pulumi.Output[list]
    """
    A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
    """
    request_interval: pulumi.Output[float]
    """
    The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
    """
    resource_path: pulumi.Output[str]
    """
    The path that you want Amazon Route 53 to request when performing health checks.
    """
    search_string: pulumi.Output[str]
    """
    String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the health check.
    """
    type: pulumi.Output[str]
    """
    The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED` and `CLOUDWATCH_METRIC`.
    """
    def __init__(__self__, resource_name, opts=None, child_health_threshold=None, child_healthchecks=None, cloudwatch_alarm_name=None, cloudwatch_alarm_region=None, enable_sni=None, failure_threshold=None, fqdn=None, insufficient_data_health_status=None, invert_healthcheck=None, ip_address=None, measure_latency=None, port=None, reference_name=None, regions=None, request_interval=None, resource_path=None, search_string=None, tags=None, type=None, __name__=None, __opts__=None):
        """
        Provides a Route53 health check.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] child_health_threshold: The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
        :param pulumi.Input[list] child_healthchecks: For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
        :param pulumi.Input[str] cloudwatch_alarm_name: The name of the CloudWatch alarm.
        :param pulumi.Input[str] cloudwatch_alarm_region: The CloudWatchRegion that the CloudWatch alarm was created in.
        :param pulumi.Input[bool] enable_sni: A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
        :param pulumi.Input[float] failure_threshold: The number of consecutive health checks that an endpoint must pass or fail.
        :param pulumi.Input[str] fqdn: The fully qualified domain name of the endpoint to be checked.
        :param pulumi.Input[str] insufficient_data_health_status: The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
        :param pulumi.Input[bool] invert_healthcheck: A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
        :param pulumi.Input[str] ip_address: The IP address of the endpoint to be checked.
        :param pulumi.Input[bool] measure_latency: A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
        :param pulumi.Input[float] port: The port of the endpoint to be checked.
        :param pulumi.Input[str] reference_name: This is a reference name used in Caller Reference
               (helpful for identifying single health_check set amongst others)
        :param pulumi.Input[list] regions: A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
        :param pulumi.Input[float] request_interval: The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
        :param pulumi.Input[str] resource_path: The path that you want Amazon Route 53 to request when performing health checks.
        :param pulumi.Input[str] search_string: String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the health check.
        :param pulumi.Input[str] type: The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED` and `CLOUDWATCH_METRIC`.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['child_health_threshold'] = child_health_threshold

        __props__['child_healthchecks'] = child_healthchecks

        __props__['cloudwatch_alarm_name'] = cloudwatch_alarm_name

        __props__['cloudwatch_alarm_region'] = cloudwatch_alarm_region

        __props__['enable_sni'] = enable_sni

        __props__['failure_threshold'] = failure_threshold

        __props__['fqdn'] = fqdn

        __props__['insufficient_data_health_status'] = insufficient_data_health_status

        __props__['invert_healthcheck'] = invert_healthcheck

        __props__['ip_address'] = ip_address

        __props__['measure_latency'] = measure_latency

        __props__['port'] = port

        __props__['reference_name'] = reference_name

        __props__['regions'] = regions

        __props__['request_interval'] = request_interval

        __props__['resource_path'] = resource_path

        __props__['search_string'] = search_string

        __props__['tags'] = tags

        if type is None:
            raise TypeError('Missing required property type')
        __props__['type'] = type

        super(HealthCheck, __self__).__init__(
            'aws:route53/healthCheck:HealthCheck',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

