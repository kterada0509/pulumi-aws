# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class ResourceDataSync(pulumi.CustomResource):
    """
    Provides a SSM resource data sync.
    """
    def __init__(__self__, __name__, __opts__=None, name=None, s3_destination=None):
        """Create a ResourceDataSync resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Name for the configuration.
        """
        __props__['name'] = name

        if not s3_destination:
            raise TypeError('Missing required property s3_destination')
        elif not isinstance(s3_destination, dict):
            raise TypeError('Expected property s3_destination to be a dict')
        __self__.s3_destination = s3_destination
        """
        Amazon S3 configuration details for the sync.
        """
        __props__['s3Destination'] = s3_destination

        super(ResourceDataSync, __self__).__init__(
            'aws:ssm/resourceDataSync:ResourceDataSync',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'name' in outs:
            self.name = outs['name']
        if 's3Destination' in outs:
            self.s3_destination = outs['s3Destination']
